interface ConfigType {
    PHOTOS_URI: string;
    DEFAULT_PHOTO_CATEGORY: string;
    PHOTO_CATEGORIES: string[];
};

const config: ConfigType = {
    PHOTOS_URI: "http://localhost:9000/photos",
    DEFAULT_PHOTO_CATEGORY: 'cat',
    PHOTO_CATEGORIES: ['cat', 'shark']
};

export default config;
