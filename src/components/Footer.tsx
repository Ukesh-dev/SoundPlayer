import { useState } from 'react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="text-center p-5 leading-4 h-[var(--footer-height)]">
      <a href="https://ukeshrestha.com.np" target="_blank" rel="noreferrer">
        &copy; Ukesh Shrestha
      </a>
      <br />
      {currentYear}
    </footer>
  )
}
