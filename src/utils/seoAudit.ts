export {};

function checkMetaTags() {
    const getMetaTag = (name: string): HTMLMetaElement | null => document.querySelector(`meta[name="${name}"]`);
    
    const logMissingTag = (tagName: string) => {
        console.log(`${tagName} tag is missing! Consider adding it for better SEO.`);
    };

    const logTagContent = (tagName: string, content: string) => {
        console.log(`${tagName} tag exists and has content: ${content}`);
    };

    const checkTagContent = (tag: HTMLMetaElement | null, tagName: string, minLength: number, maxLength: number) => {
        if (!tag) {
            logMissingTag(tagName);
            return;
        }

        const content = tag.content.trim();

        if (!content) {
            console.log(`${tagName} tag is empty! Consider adding it for better SEO.`);
            return;
        }

        if (content.length < minLength || content.length > maxLength) {
            console.log(`Meta ${tagName} length is not optimal for SEO at ${content.length} characters.`);
        } else {
            logTagContent(tagName, content);
        }
    };

    const titleTag = getMetaTag("title");
    checkTagContent(titleTag, "Title", 1, 60);

    const descriptionTag = getMetaTag("description");
    checkTagContent(descriptionTag, "Description", 50, 160);

    const keywordsTag = getMetaTag("keywords");

    if (keywordsTag && keywordsTag.content.trim()) {
        logTagContent("Keywords", keywordsTag.content);
    } else {
        logMissingTag("Keywords");
    }
}
checkMetaTags();

function checkHeaders() {
    const headerElements: NodeListOf<HTMLHeadingElement> = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    let h1Count = 0;
    let previousHeaderLevel = 0;
    let headerHierarchyValid = true;

    headerElements.forEach(header => {
        const headerLevel = parseInt(header.tagName.charAt(1));

        if (headerLevel === 1) {
            h1Count++;
        }

        if (headerLevel - previousHeaderLevel > 1) {
            headerHierarchyValid = false;
        }

        previousHeaderLevel = headerLevel;

    });

    if (h1Count !== 1) {
        console.log(`Expected one <h1> element but found ${h1Count}.`);
    }

    if (!headerHierarchyValid) {
        console.log('Header hierarchy is not following best practices.');
    } else {
        console.log('Header structure follows best practices.');
    }
}
checkHeaders();

function checkMobileResponsiveness() {
    const viewportMetaTag: HTMLMetaElement | null = document.querySelector('meta[name="viewport"]');

    if (!viewportMetaTag || !viewportMetaTag.content.includes('width=device-width')) {
        console.log('Viewport meta tag is missing or not properly configured for mobile responsiveness.');
    } else {
        console.log('Viewport meta tag is properly configured for mobile responsiveness.');
    }

    const mediaQueries = window.getComputedStyle(document.body).getPropertyValue('font-family');

    if (!mediaQueries.includes('min-width')) {
        console.log('CSS media queries for responsiveness are missing or not properly configured.');
    } else {
        console.log('CSS media queries for responsiveness are properly configured.');
    }
}
checkMobileResponsiveness();


function checkPageSpeed() {
    const images: NodeListOf<HTMLImageElement> = document.querySelectorAll('img');
    let lazyLoadingUsed = false;

    images.forEach(image => {
        if (image.getAttribute('loading') === 'lazy') {
            lazyLoadingUsed = true;
        }
    });

    if (lazyLoadingUsed) {
        console.log('Lazy loading for images is implemented. This can improve page speed.');
    } else {
        console.log('Consider implementing lazy loading for images to improve page speed.');
    }

    const scripts: NodeListOf<HTMLScriptElement> = document.querySelectorAll('script');
    let asyncScriptsUsed = false;

    scripts.forEach(script => {
        if (script.hasAttribute('async')) {
            asyncScriptsUsed = true;
        }
    });

    if (asyncScriptsUsed) {
        console.log('Asynchronous loading for scripts is implemented. This can improve page speed.');
    } else {
        console.log('Consider implementing asynchronous loading for scripts to improve page speed.');
    }
}
checkPageSpeed();
