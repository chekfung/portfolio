import fs from 'fs';
import path from 'path';

export type Post = {
    slug: string;
    title: string;
    date: string;
    content: string;
    excerpt: string;
};

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getSortedPostsData(): Post[] {
    if (!fs.existsSync(postsDirectory)) {
        console.warn(`Posts directory not found: ${postsDirectory}`);
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter(name => name.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Fallback values
            let title = slug;
            let date = "";
            let content = fileContents;

            // quick regex parse
            const titleMatch = fileContents.match(/title:\s*(.*)/);
            const dateMatch = fileContents.match(/date:\s*(.*)/);

            if (titleMatch) title = titleMatch[1].trim();
            if (dateMatch) date = dateMatch[1].trim();

            // remove frontmatter
            content = fileContents.replace(/---[\s\S]*?---/, '').trim();

            return {
                slug,
                title,
                date,
                content,
                // Plain text excerpt for preview
                excerpt: content.substring(0, 150).replace(/[#*`]/g, '') + "..."
            };
        });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPostData(slug: string): Post | null {
    // Ensure we check for the file correctly
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        console.error(`Post not found: ${fullPath}`);
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Fallback values
    let title = slug;
    let date = "";
    let content = fileContents;

    // quick regex parse
    const titleMatch = fileContents.match(/title:\s*(.*)/);
    const dateMatch = fileContents.match(/date:\s*(.*)/);

    if (titleMatch) title = titleMatch[1].trim();
    if (dateMatch) date = dateMatch[1].trim();

    // remove frontmatter
    content = fileContents.replace(/---[\s\S]*?---/, '').trim();

    return {
        slug,
        title,
        date,
        content,
        excerpt: ""
    };
}
