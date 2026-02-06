import fs from 'fs';
import path from 'path';

export interface GalleryImage {
    src: string;
    alt: string;
    label: string;
}

const GALLERY_DIR = path.join(process.cwd(), 'public/gallery');

export function getGalleryImages(): GalleryImage[] {
    if (!fs.existsSync(GALLERY_DIR)) {
        return [];
    }

    const fileNames = fs.readdirSync(GALLERY_DIR);

    // Filter for image files (jpg, jpeg, png, webp)
    const images = fileNames.filter(fileName => {
        return /\.(jpg|jpeg|png|webp)$/i.test(fileName);
    });

    return images.map(fileName => {
        // Create a label from the filename: remove extension and underscores/hyphens
        const nameWithoutExt = fileName.replace(/\.[^/.]+$/, "");
        const label = nameWithoutExt
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, c => c.toUpperCase()); // Title Case

        return {
            src: `/gallery/${fileName}`,
            alt: label,
            label: label
        };
    });
}
