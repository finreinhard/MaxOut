import * as Random from 'expo-random';
import {v4} from "uuid";

export const uuidv4 = async () => {
    const options = {
        random: await Random.getRandomBytesAsync(16),
    };

    return v4(options);
};
