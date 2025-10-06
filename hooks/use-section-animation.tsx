"use client"

import { useEffect } from "react"

export function useSectionAnimation() {
  useEffect(() => {
    // Function to handle intersection observer
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Add or remove active class based on visibility
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
          entry.target.classList.add("animate-slide-in")
        } else {
          entry.target.classList.remove("active")
        }
      })
    }

    // Create observer
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // viewport
      threshold: 0.1, // trigger when 10% of the target is visible
      rootMargin: "-100px 0px", // trigger slightly before the element comes into view
    })

    // Observe all sections
    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      observer.observe(section)
    })

    // Handle navigation click for smooth scrolling with animation
    const handleNavClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement
      const href = target.getAttribute("href")

      if (href?.startsWith("#")) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          // Scroll to the target section
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for header
            behavior: "smooth",
          })

          // Add animation class to target section
          setTimeout(() => {
            targetElement.classList.add("animate-slide-in")
          }, 300)
        }
      }
    }

    // Add click event listeners to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavClick as EventListener)
    })

    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavClick as EventListener)
      })
    }
  }, [])
}
