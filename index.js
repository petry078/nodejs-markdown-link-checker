import fs from 'fs'
import fetch from 'node-fetch'

// Read markdown file
const readMarkdownFile = (path) => {
    try {
        return fs.readFileSync(path, 'utf8')
    } catch (err){
        console.error(err)
        return null
    }
}

const markdownContent = readMarkdownFile('README.md')//actual path of the file

// Extract links from markdown content
const extractLinks = (markdownContent) => {
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
    const links = [];
    let match;

    while(match = linkRegex.exec(markdownContent)) {
        links.push({
            text: match[1],
            url: match[2]
        })
    }
    return links
}

const links = extractLinks(markdownContent)

// Check links
const checkLinks = (links) => {
    links.forEach(link => {
        fetch(link.url)
            .then(res => {
                console.log(`Link ${link.url} is ${res.status}`)
            })
            .catch(err => {
                console.error(`Link ${link.url} is ${err}`)
            })
    })
}

checkLinks(links)