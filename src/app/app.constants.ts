import {version} from '../../package.json';

export abstract class AppConstants
{
    public static readonly APP_VERSION = version;

    public static readonly PHOTOS = {
        LIST_NUMBER: 4000,
        KEY_ID: '{ID}',
        PATTERN_URL: 'https://picsum.photos/id/{ID}/500/500.jpg',
        PATTERN_TXT: 'Photo #{ID}'
    };
}
