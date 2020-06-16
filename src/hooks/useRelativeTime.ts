import {useEffect, useState} from "react";
import moment from "moment";

const useRelativeTime = (time: number): string => {
    const [formatted, setFormatted] = useState('');

    useEffect(() => {
        const timeMoment = moment(time);
        const now = Date.now();

        if(timeMoment.isSame(now, 'day')) {
            setFormatted(timeMoment.fromNow());
        } else if (timeMoment.isSame(now, 'week')) {
            setFormatted(timeMoment.format('dddd'));
        } else {
            setFormatted(timeMoment.format('LLL'));
        }

    }, [time]);

    return formatted;
}

export default useRelativeTime;
