import React from 'react';
import {StyleProp, Text, TextStyle,} from "react-native";
import LinkText from "../LinkText";

interface TermsOfServiceProps {
    styles: {
        title: StyleProp<TextStyle>,
        text: StyleProp<TextStyle>,
        sectionTitle: StyleProp<TextStyle>,
        danger: StyleProp<TextStyle>,
    }
}

const TermsOfService = (props: TermsOfServiceProps) => {
    const {styles} = props;

    return (
        <>
            <Text style={styles.title}>Terms of Service</Text>
            <Text style={styles.text}>
                The following terms of service applies to the iOS and android app "MaxOut", in the following as "the
                app", programmed by Fin Reinhard and the website maxout.angu.li.
            </Text>
            <LinkText url="https://maxout.angu.li/terms-of-service" style={styles.text}>
                This Terms of Service are also available at maxout.angu.li/terms-of-service.
            </LinkText>
            <Text style={styles.sectionTitle}>Information according to §5 TMG</Text>
            <Text style={styles.text}>Fin Reinhard</Text>
            <Text style={styles.text}>Schwarzenbergstraße 24</Text>
            <Text style={styles.text}>34130 Kassel</Text>
            <Text style={styles.text}>Germany</Text>
            <LinkText url="mailto:mail@angu.li" style={styles.text}>mail@angu.li</LinkText>
            <LinkText url="tel:+4915777924748" style={styles.text}>+49 157 77924748</LinkText>
            <Text style={styles.sectionTitle}>Content Liability</Text>
            <Text style={styles.text}>
                The services provided on this website might link to websites by third parties on whose content we do not
                have any influence and thereby cannot take any responsibility.
                At the time of linking the third party websites we could not identify any illegal content.
                Permanent monitoring cannot be expected.
                As soon as we find any illegal content we will immediatly remove the linking.
            </Text>
            <Text style={styles.sectionTitle}>Copyright</Text>
            <Text style={styles.text}>
                The content of this service is subject to German copyright law.
                The duplication, manipulation or distribution and any type of use outside the limits of the copyright
                law require explicit permisson of the creator or author of the content.
                Downloading or copying the contents of this website are only permitted for personal not commercial use.
                For content on this website not created by the provider please be aware of the copyright rights of the
                creators.
            </Text>
            <Text style={styles.sectionTitle}>Changes to this service</Text>
            <Text style={styles.text}>
                We reserve us the right to change or discontinue the services without any notice or compensation caused
                by those actions.
                These terms of Service are also subject to change without notice, for changes please review them
                periodically.
            </Text>
        </>
    );
};

export default TermsOfService;
