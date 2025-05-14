'use server'

import {genAI} from "@/lib/gemini";
import {SYSTEM_PROMPT} from "@/config/promptConfig";

export async function processPromptToSongs(prompt:string){
    const finalPrompt = `${SYSTEM_PROMPT}\n${prompt}`;

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
        const result = await model.generateContent(finalPrompt);

        let responseText = result.response.text();


        responseText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();

        try {

            const songArray = JSON.parse(responseText);

            return songArray;
        } catch (error) {
            console.error("Error parsing response text:", error);
            return 'Failed to parse response into song list.'; // In case of a parsing error
        }
    } catch (error) {
        console.error("Error during Gemini API operation:", error);
        return 'Error processing prompt. Please try again later.'; // Handle API errors
    }

}