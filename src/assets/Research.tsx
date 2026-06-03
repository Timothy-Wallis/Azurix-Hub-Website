import { createElement, type JSX } from "react";
export default function Research(): JSX.Element {
    const sectionInfoStr: string = `We are actively developing new tools and features to support both teaching and research in the biological scene.`
    return (
        createElement('section', {id: 'research', className: 'section'}, 
            createElement('div', {className: 'container'}, 
                createElement('h2', null, 'Development Roadmap'),
                createElement('p', {className: 'section-intro' }, sectionInfoStr),
                createElement('ul', {className: 'roadmap-list'}, 
                    createElement('li', null, createElement('strong', {style: {color: 'green'}}, 'Current:'), ' Implementation of Latest updates for user account creation and login'),
                    createElement('li', null, createElement('strong', {style: {color: 'yellow'}}, 'Next Release:'), ` Teaching tools added to suite for Educator accounts`),
                    createElement('li', null, createElement('strong', {style: {color: 'orange'}}, 'Future Releases:'), ` Adding of new tools and genomic software for usage in the future`)
                )
            )
        )
    )
}
