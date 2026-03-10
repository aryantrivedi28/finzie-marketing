// lib/services/aiPostService.ts
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function generateAIPost({
    fullName,
    serviceCategory,
    subCategory,
    requirement,
    requestId
}: any): Promise<string> {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // Using cheaper model for cost efficiency
            messages: [
                {
                    role: "system",
                    content: "You are a community manager. Create engaging, professional posts for freelancer/specialist communities. Keep it concise but informative. Format with emojis and line breaks."
                },
                {
                    role: "user",
                    content: `Create a community post for a new ${serviceCategory} - ${subCategory} project. 
          
Client requirement: ${requirement.substring(0, 400)}

The post should include:
- A catchy headline with relevant emoji
- Service category and subcategory
- Brief project description (2-3 sentences)
- What they're looking for in a specialist (2-3 key points)
- Call to action for interested specialists

Format nicely with emojis and line breaks. Make it engaging for specialists.`
                }
            ],
            temperature: 0.7,
            max_tokens: 400
        });

        const post = completion.choices[0].message.content;

        if (!post) {
            return generateFallbackPost(serviceCategory, subCategory, requestId);
        }

        // Add request ID at the bottom for tracking
        const finalPost = `${post}

📌 *Request ID:* ${requestId}
#${serviceCategory.replace(/\s/g, '')} #${subCategory.replace(/\s/g, '')} #Freelance #Gig`;

        return finalPost;

    } catch (error) {
        console.error('AI Post generation failed:', error);
        return generateFallbackPost(serviceCategory, subCategory, requestId);
    }
}

// Fallback post if AI fails
function generateFallbackPost(serviceCategory: string, subCategory: string, requestId: string): string {
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    return `🚀 *New ${serviceCategory} Opportunity*

We're looking for an experienced ${subCategory} specialist for a client project.

📋 *Project Scope:*
Professional ${serviceCategory} services with focus on ${subCategory}

🎯 *Looking For:*
• Proven experience in ${subCategory}
• Strong portfolio with similar projects
• Available for immediate start

💰 *Budget:* Competitive (discuss with client)
🗓 *Timeline:* Flexible

📌 *Request ID:* ${requestId}
📅 *Posted:* ${date}

Interested? Reply with your portfolio and experience.

#${serviceCategory.replace(/\s/g, '')} #${subCategory.replace(/\s/g, '')} #Hiring #Freelance #Gig`;
}