import React from 'react';
import {StyleProp, Text, TextStyle,} from "react-native";
import LinkText from "../LinkText";

interface PrivacyPolicyModalProps {
    styles: {
        title: StyleProp<TextStyle>,
        text: StyleProp<TextStyle>,
        sectionTitle: StyleProp<TextStyle>,
        danger: StyleProp<TextStyle>,
    }
}

const PrivacyPolicy = (props: PrivacyPolicyModalProps) => {
    const {styles} = props;

    return (
        <>
            <Text style={styles.title}>Privacy Policy</Text>
            <Text style={styles.text}>
                The following privacy policy applies to the iOS and Android app &quot;MaxOut&quot;, in the
                following as MaxOut or the app, developed by Fin Reinhard and the website maxout.angu.li.
            </Text>
            <LinkText url="https://maxout.angu.li/privacy" style={styles.text}>
                This privacy policy is also available at maxout.angu.li/privacy.
            </LinkText>
            <LinkText url="mailto:mail@angu.li" style={styles.text}>
                In the following we have collected some questions about privacy collected and answered.
                Feel free to contact us at mail@angu.li when the list is incomplete.
            </LinkText>
            <Text style={styles.sectionTitle}>What data collects the app?</Text>
            <Text style={styles.text}>
                The app only stores the data you put in to provide a smooth user experience.
                Here is what the app stores:
            </Text>
            <Text style={styles.text}>
                1. Your Skill configuration like the name.
            </Text>
            <Text style={styles.text}>
                2. Your Set Data, including amount of repititions and the current timestamp.
            </Text>
            <Text style={styles.text}>
                Usually this data cannot be directly associated with your person.
            </Text>
            <Text style={styles.sectionTitle}>
                Where stores the app the data?
            </Text>
            <Text style={styles.text}>
                Your data will only be stored and processed on your device.
            </Text>
            <Text style={styles.sectionTitle}>
                How tracks the app me?
            </Text>
            <Text style={styles.text}>
                The app has no analytics software built in, so you can stay anonymous and enjoy the app with the
                highest standard of privacy.
                We won't even notice you are using the app, so if you enjoy it and want to give us some
                feedback, you can leave a review on the AppStore.
            </Text>
            <Text style={styles.sectionTitle}>
                How can I delete my data?
            </Text>
            <Text style={styles.text}>
                At all times you have the full control about your data.
                In the settings we provide you the option to delete all data, that is stored by the app.
            </Text>
            <Text style={[styles.text, styles.danger]}>
                Warning: Once you delete your data, there is no way back!
            </Text>
        </>
    );
};

export default PrivacyPolicy;
