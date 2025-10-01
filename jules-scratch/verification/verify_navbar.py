import re
from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    try:
        # Navigate to the local development server
        page.goto("http://localhost:5173")

        # Wait for the page to load by waiting for a known element
        page.wait_for_selector("section#about")

        # --- Verify 'About' section ---
        # Scroll to the 'about' section to trigger the highlighter
        page.evaluate("document.querySelector('section#about').scrollIntoView()")
        # Wait for scroll and potential UI update
        page.wait_for_timeout(500)
        # Check if the 'About' link is active
        about_link = page.locator('//ul[contains(@class, "sm:flex")]//a[text()="About"]/parent::li')
        expect(about_link).to_have_class(re.compile(r"\btext-white\b"))
        page.screenshot(path="jules-scratch/verification/verify-about.png")

        # --- Verify 'Work' section ---
        page.evaluate("document.querySelector('section#work').scrollIntoView()")
        page.wait_for_timeout(500)
        work_link = page.locator('//ul[contains(@class, "sm:flex")]//a[text()="Work"]/parent::li')
        expect(work_link).to_have_class(re.compile(r"\btext-white\b"))
        page.screenshot(path="jules-scratch/verification/verify-work.png")

        # --- Verify 'Contact' section ---
        page.evaluate("document.querySelector('section#contact').scrollIntoView()")
        page.wait_for_timeout(500)
        contact_link = page.locator('//ul[contains(@class, "sm:flex")]//a[text()="Contact"]/parent::li')
        expect(contact_link).to_have_class(re.compile(r"\btext-white\b"))
        page.screenshot(path="jules-scratch/verification/verify-contact.png")

        # --- Verify scrolling to top ---
        page.evaluate("window.scrollTo(0, 0)")
        page.wait_for_timeout(500)
        # Check that all links are inactive (i.e., have text-secondary class)
        inactive_links = page.locator('//ul[contains(@class, "sm:flex")]//li[contains(@class, "text-secondary")]')
        expect(inactive_links).to_have_count(3)
        page.screenshot(path="jules-scratch/verification/verify-top.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)