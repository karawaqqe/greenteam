/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { services } from '../data/services.js'
import { payments } from '../data/payments.js'
import { translations } from './translations.js'

const languageStorageKey = 'green-team-language'
const defaultLanguage = 'en'
const supportedLanguages = ['en', 'fr']

const LanguageContext = createContext(null)

const getSavedLanguage = () => {
  if (typeof window === 'undefined') {
    return defaultLanguage
  }

  const savedLanguage = window.localStorage.getItem(languageStorageKey)
  return supportedLanguages.includes(savedLanguage) ? savedLanguage : defaultLanguage
}

const getValueByPath = (source, path) =>
  path.split('.').reduce((value, key) => (value && value[key] !== undefined ? value[key] : undefined), source)

const mergePricing = (pricing = [], pricingOverrides = []) =>
  pricing.map((group, index) => ({
    ...group,
    ...(pricingOverrides[index] || {}),
  }))

const applyOverrides = (items, overrides = {}) =>
  items.map((item) => {
    const override = overrides[item.slug] || overrides[item.icon] || {}

    return {
      ...item,
      ...override,
      pricing: override.pricing ? mergePricing(item.pricing, override.pricing) : item.pricing,
    }
  })

function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getSavedLanguage)

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (nextLanguage) => {
    if (!supportedLanguages.includes(nextLanguage)) {
      return
    }

    setLanguageState(nextLanguage)
    window.localStorage.setItem(languageStorageKey, nextLanguage)
    document.documentElement.lang = nextLanguage
  }

  const value = useMemo(() => {
    const dictionary = translations[language] || translations[defaultLanguage]
    const fallbackDictionary = translations[defaultLanguage]

    return {
      language,
      setLanguage,
      languages: supportedLanguages,
      t: (path) => getValueByPath(dictionary, path) ?? getValueByPath(fallbackDictionary, path) ?? path,
      serviceItems: applyOverrides(services, dictionary.serviceData),
      paymentItems: applyOverrides(payments, dictionary.paymentData),
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

const useLanguage = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}

export { LanguageProvider, useLanguage }
