export const defaultTheme = {
    dark: true,
    colors: {
        primary: '#ff9500',
        background: '#1E1E1E',
        card: '#333',
        text: '#fff',
        border: 'rgb(199, 199, 204)',
    },
};

export const dangerColor = '#FF3B30';

export const changeLuminance = (color: string, luminance: number = 0): string => {
    color = color.replace(/[^0-9a-f]/gi, '');

    if (color.length < 6) {
        color = `${color[0]}${color[0]}${color[1]}${color[1]}${color[2]}${color[2]}`;
    }

    let rgb = '#';

    for (let i = 0; i < 3; i++) {
        const c = parseInt(color.substr(i * 2, 2), 16);
        const hex = Math.round(Math.min(Math.max(0, c + (c * luminance)), 255)).toString(16);
        rgb += ('00' + c).substr(hex.length);
    }

    return rgb;
}
