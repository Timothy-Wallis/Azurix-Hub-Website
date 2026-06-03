import { createElement, type JSX } from "react";
export default function Hero(): JSX.Element {
  return (
    createElement('section', { className: 'hero', id: 'home' },
      createElement('div', { className: 'hero-content' },
        createElement('h1', null, 'Welcome to Iterum Sciences'),
        createElement('p', { className: "hero-subtitle" }, 'Biology Tools & Solutions for Teaching and Research'),
        createElement('p', { className: "hero-description" }, "  Providing Teachers and Researchers with cutting-edge tools for any workflow in biological sciences. Explore our suite of solutions designed to enhance your research and teaching capabilities."),
        createElement('div', { className: "cta-buttons" },
          createElement('a', { className: "btn btn-primary", href: '#tools' }, "Explore Tools")
        )
      )
    )
  )
}
