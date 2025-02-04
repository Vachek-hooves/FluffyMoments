import { createContext,useState,useContext,useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const StoreContext = createContext();

export default StoreContext;

export const StoreProvider = ({ children }) => {
    const [moodHistory, setMoodHistory] = useState([]);

    // Load saved moods when app starts
    useEffect(() => {
        loadMoodHistory();
    }, []);

    // Load mood history from AsyncStorage
    const loadMoodHistory = async () => {
        try {
            const savedMoods = await AsyncStorage.getItem('moodHistory');
            if (savedMoods) {
                setMoodHistory(JSON.parse(savedMoods));
            }
        } catch (error) {
            console.error('Error loading mood history:', error);
        }
    };

    // Save new mood data
    const saveMoodData = async (moodData) => {
        try {
            const newMoodHistory = [...moodHistory, moodData];
            await AsyncStorage.setItem('moodHistory', JSON.stringify(newMoodHistory));
            setMoodHistory(newMoodHistory);
            return true; // Return success
        } catch (error) {
            console.error('Error saving mood data:', error);
            return false; // Return failure
        }
    };

    // Get all saved moods
    const getMoodHistory = () => {
        return moodHistory;
    };

    const value = {
        moodHistory,
        saveMoodData,
        getMoodHistory,
    };
    
    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useAppContext = () => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error("useAppContext must be used within a StoreProvider");
    }
    return context;
};

