const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItContainer = require("markdown-it-container");

module.exports = function(eleventyConfig) {
  // Add syntax highlighting plugin
  eleventyConfig.addPlugin(syntaxHighlight);

  // Configure Markdown
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink(),
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  });

  // GitHub-style alerts
  const alertTypes = [
    { name: 'note', icon: '💡' },
    { name: 'tip', icon: '💡' },
    { name: 'important', icon: '❗' },
    { name: 'warning', icon: '⚠️' },
    { name: 'caution', icon: '🚫' }
  ];

  alertTypes.forEach(({ name, icon }) => {
    markdownLibrary.use(markdownItContainer, name.toUpperCase(), {
      validate: function(params) {
        return params.trim().match(new RegExp(`^${name.toUpperCase()}\\s*(.*)$`, 'i'));
      },
      render: function(tokens, idx) {
        const m = tokens[idx].info.trim().match(new RegExp(`^${name.toUpperCase()}\\s*(.*)$`, 'i'));
        if (tokens[idx].nesting === 1) {
          const title = m && m[1] ? m[1] : name.charAt(0).toUpperCase() + name.slice(1);
          return `<div class="markdown-alert markdown-alert-${name.toLowerCase()}">
                    <p class="markdown-alert-title">${icon} ${title}</p>\n`;
        } else {
          return '</div>\n';
        }
      }
    });
  });

  eleventyConfig.setLibrary("md", markdownLibrary);

  // Copy static assets
  eleventyConfig.addPassthroughCopy({"src/css": "css"});
  eleventyConfig.addPassthroughCopy({"src/js": "js"});
  eleventyConfig.addPassthroughCopy({"assets/img": "img"});

  // Watch for changes in docs folder
  eleventyConfig.addWatchTarget("./assets/docs/");

  // Custom collection for documentation pages
  eleventyConfig.addCollection("docs", function(collectionApi) {
    return collectionApi.getFilteredByGlob("assets/docs/**/*.md");
  });

  // Transform docs URLs
  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      if (data.page.inputPath.includes('assets/docs/') || data.page.inputPath.includes('assets\\docs\\')) {
        let path = data.page.inputPath
          .replace(/^\.[\/\\]assets[\/\\]docs[\/\\]/, '')
          .replace(/^assets[\/\\]docs[\/\\]/, '')
          .replace(/\.md$/, '/');
        // Normalize path separators
        path = path.replace(/\\/g, '/');
        return `/docs/${path}`;
      }
      return data.permalink;
    }
  });

  // Filter to get the title from filename or frontmatter
  eleventyConfig.addFilter("getTitle", function(page) {
    if (page.data.title) {
      return page.data.title;
    }
    // Extract title from filename
    const filename = page.fileSlug;
    return filename.charAt(0).toUpperCase() + filename.slice(1).replace(/-/g, ' ');
  });

  // Filter to create URL-friendly slug
  eleventyConfig.addFilter("slug", function(str) {
    return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  });

  // Date filters
  eleventyConfig.addFilter("dateIso", function(date) {
    return new Date(date).toISOString();
  });

  eleventyConfig.addFilter("dateReadable", function(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Title case filter
  eleventyConfig.addFilter("titleCase", function(str) {
    if (!str) return '';
    return str.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  });

  // Image URL filter for automatic path prefix handling
  eleventyConfig.addFilter("imgUrl", function(imgPath) {
    // Si le chemin commence par /, l'utiliser tel quel, sinon ajouter /img/
    if (imgPath.startsWith('/')) {
      return imgPath;
    }
    return `/img/${imgPath}`;
  });

  return {
    pathPrefix: '',
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};