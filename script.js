// Projects data with GitHub repository links
const projects = [
    {
        title: "Loan Approval Conversational Agent",
        description: "A compliance-driven conversational AI agent built with Parlant that guides customers through a structured loan approval process.",
        tech: ["Parlant", "Python", "Conversational AI"],
        github: "https://github.com/manikantatalluriaiengineer-spec/Loan-Approval-Conversational-Agent-with-Parlant",
        icon: "fa-comments"
    },
    {
        title: "Stock Portfolio Analysis Agent",
        description: "AI agent that streams portfolio analysis workflow in real-time using CrewAI, React/Next.js, and CopilotKit's AG-UI Protocol.",
        tech: ["CrewAI", "Next.js", "React", "FastAPI"],
        github: "https://github.com/manikantatalluriaiengineer-spec/Stock-Portfolio-Analysis-Agent",
        icon: "fa-chart-line"
    },
    {
        title: "Financial Analyst with DeepSeek",
        description: "MCP-powered financial analysis agentic workflow using CrewAI and DeepSeek-R1 that analyzes stock market data and provides insights.",
        tech: ["CrewAI", "DeepSeek-R1", "Ollama", "MCP"],
        github: "https://github.com/manikantatalluriaiengineer-spec/Financial_Analyst",
        icon: "fa-dollar-sign"
    },
    {
        title: "Brand Monitoring Flow",
        description: "Automated brand monitoring system using AI agents with DeepSeek-R1, CrewAI, and BrightData for multi-platform social media monitoring.",
        tech: ["CrewAI", "DeepSeek-R1", "BrightData", "Streamlit"],
        github: "https://github.com/manikantatalluriaiengineer-spec/Brand-monitoring-flow",
        icon: "fa-bullhorn"
    },
    {
        title: "MCP Agentic RAG",
        description: "MCP-powered agentic RAG system using Bright Data and Qdrant for automated book writing and intelligent document processing.",
        tech: ["MCP", "Qdrant", "BrightData", "Python"],
        github: "https://github.com/manikantatalluriaiengineer-spec/MCP-Agentic-RAG",
        icon: "fa-book"
    },
    {
        title: "Chat with Code",
        description: "Natural language interface for GitHub repositories using Qwen3-Coder model with Cleanlab Codex validation for reliable code responses.",
        tech: ["Qwen3-Coder", "LlamaIndex", "Milvus", "Cleanlab"],
        github: "https://github.com/manikantatalluriaiengineer-spec/chat-with-code",
        icon: "fa-code"
    },
    {
        title: "DeepSeek Fine-tuning",
        description: "Fine-tuning DeepSeek (distilled Llama variant) using Unsloth and Ollama for custom model training and optimization.",
        tech: ["Unsloth", "Ollama", "DeepSeek", "Fine-tuning"],
        github: "https://github.com/manikantatalluriaiengineer-spec/deepseek-fine-tuning",
        icon: "fa-brain"
    },
    {
        title: "Build Reasoning Model",
        description: "Building a reasoning model like DeepSeek-R1 using Unsloth and GRPO (Group Relative Policy Optimization) for advanced reasoning capabilities.",
        tech: ["Unsloth", "vLLM", "GRPO", "Reasoning"],
        github: "https://github.com/manikantatalluriaiengineer-spec/build-reasoning-model",
        icon: "fa-lightbulb"
    },
    {
        title: "Fastest RAG Stack",
        description: "Ultra-fast RAG stack with Milvus and Groq achieving retrieval latency < 15ms using binary quantization and blazing fast inference.",
        tech: ["Milvus", "Groq", "LlamaIndex", "Beam"],
        github: "https://github.com/manikantatalluriaiengineer-spec/fastest-rag",
        icon: "fa-bolt"
    },
    {
        title: "Deploy Agentic RAG",
        description: "100% private Agentic RAG API using CrewAI and LitServe for production deployment with Qwen3 model integration.",
        tech: ["CrewAI", "LitServe", "Ollama", "Qwen3"],
        github: "https://github.com/manikantatalluriaiengineer-spec/deploy-agentic-rag",
        icon: "fa-rocket"
    },
    {
        title: "Multimodal RAG with AssemblyAI",
        description: "Multimodal RAG system combining audio transcription, vector database storage, and CrewAI Flows for voice-enabled document querying.",
        tech: ["AssemblyAI", "Milvus", "CrewAI Flows", "OpenAI"],
        github: "https://github.com/manikantatalluriaiengineer-spec/Multimodal-RAG-with-AssemblyAI",
        icon: "fa-microphone"
    },
    {
        title: "RAG SQL Router",
        description: "Intelligent agent that routes queries between Vector DB RAG and SQL query engine with Cleanlab Codex validation for reliable outputs.",
        tech: ["LlamaIndex", "Milvus", "Cleanlab Codex", "Streamlit"],
        github: "https://github.com/manikantatalluriaiengineer-spec/rag-sql-router",
        icon: "fa-database"
    },
    {
        title: "Cursor Linkup MCP",
        description: "Custom MCP server for Cursor IDE enabling deep web searches using Linkup and RAG with LlamaIndex for enhanced development workflow.",
        tech: ["MCP", "Linkup", "LlamaIndex", "Cursor IDE"],
        github: "https://github.com/manikantatalluriaiengineer-spec/Cursor-Linkup-MCP",
        icon: "fa-link"
    },
    {
        title: "Content Planner Flow",
        description: "Agentic workflow using CrewAI Flow to scrape websites, prepare social posts, and publish them automatically, powered by locally running Llama 3.2.",
        tech: ["CrewAI Flow", "Llama 3.2", "FireCrawl", "Typefully"],
        github: "https://github.com/manikantatalluriaiengineer-spec/Content-Planner",
        icon: "fa-pen"
    }
];

// Render projects
function renderProjects() {
    const projectsContainer = document.querySelector('#projects .grid');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-dark-card p-6 rounded-xl border border-gray-800 card-hover fade-in';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-gradient-to-r from-ai-blue to-ai-purple rounded-lg flex items-center justify-center">
                    <i class="fas ${project.icon} text-white text-xl"></i>
                </div>
                <a href="${project.github}" target="_blank" class="ml-auto text-ai-blue hover:text-ai-purple transition">
                    <i class="fab fa-github text-2xl"></i>
                </a>
            </div>
            <h3 class="font-bold text-xl mb-3">${project.title}</h3>
            <p class="text-gray-400 text-sm mb-4 leading-relaxed">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.tech.map(tech => `
                    <span class="tech-badge px-3 py-1 rounded-full text-xs">${tech}</span>
                `).join('')}
            </div>
            <a href="${project.github}" target="_blank" class="text-ai-blue hover:text-ai-purple text-sm font-semibold flex items-center">
                View on GitHub <i class="fas fa-arrow-right ml-2"></i>
            </a>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Resume download handler
document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
    if (this.textContent.includes('Resume')) {
        e.preventDefault();
        // Create a simple resume download
        const resumeLink = document.createElement('a');
        resumeLink.href = 'resume.pdf'; // You'll need to add this file
        resumeLink.download = 'Manikanta_Talluri_Resume.pdf';
        resumeLink.click();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    
    // Add scroll effect to navbar
    let lastScroll = 0;
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
        
        lastScroll = currentScroll;
    });
});

