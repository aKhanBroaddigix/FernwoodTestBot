import { Stack } from "@fluentui/react";
import { animated, useSpring } from "@react-spring/web";
// import { useTranslation } from "react-i18next"; // Removed since we're hardcoding the value

import styles from "./Answer.module.css";
// import { AnswerIcon } from "./AnswerIcon";

import MyCustomIcon from "../../assets/logo.jpeg";

export const AnswerLoading = () => {
    // const { t, i18n } = useTranslation(); // This can now be removed as we're not using translations
    const animatedStyles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
    });

    return (
        <animated.div style={{ ...animatedStyles }}>
            <Stack className={styles.answerContainer} verticalAlign="space-between">
                <img src={MyCustomIcon} alt="Loading icon" className={styles.myCustomIcon} />
                {/* <AnswerIcon /> */}
                <Stack.Item grow>
                    <p className={styles.answerText}>
                        Just a moment and I'll check {/* Hardcoded text */}
                        <span className={styles.loadingdots} />
                    </p>
                </Stack.Item>
            </Stack>
        </animated.div>
    );
};
