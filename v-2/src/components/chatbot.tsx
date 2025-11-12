'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Award,
  Bot,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';
import remarkGfm from 'remark-gfm';

import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/chart';
import { Input } from '@/components/input';
import { ScrollArea } from '@/components/scroll-area';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const PREDEFINED_QUESTIONS = [
  "What are Yash Kapure's skills and experience?",
  "Tell me about Yash Kapure's projects",
  'How can I contact Yash Kapure?',
];

const FIRST_TIME_KEY = 'chatbot-first-time';
const POPUP_SEEN_KEY = 'chatbot-popup-seen';

// Component to render match score with circular progress (unused - replaced by pie chart)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MatchScore({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 36; // radius = 36
  const offset = circumference - (score / 100) * circumference;
  const color =
    score >= 80
      ? 'text-green-500'
      : score >= 60
        ? 'text-blue-500'
        : 'text-yellow-500';
  const strokeColor =
    score >= 80
      ? 'stroke-green-500'
      : score >= 60
        ? 'stroke-blue-500'
        : 'stroke-yellow-500';

  return (
    <div className="flex items-center justify-center">
      <div className="relative size-24">
        <svg className="size-24 -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="36"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-muted"
          />
          <circle
            cx="48"
            cy="48"
            r="36"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className={cn('transition-all duration-1000', strokeColor)}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={cn('text-2xl font-bold', color)}>{score}%</span>
        </div>
      </div>
    </div>
  );
}

// Component to render job match analysis with enhanced UI
function JobMatchAnalysis({ content }: { content: string }) {
  // Extract skills from [SKILLS: ...] format
  const skillsRegex = /\[SKILLS:\s*([^\]]+)\]/g;
  const skillsMatches = Array.from(content.matchAll(skillsRegex));
  let allSkills = skillsMatches.flatMap((match) =>
    match[1]
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
  );

  // If no skills found in [SKILLS:] format, try to extract from text
  if (allSkills.length === 0) {
    // Look for common skill mentions in the content
    const skillKeywords = [
      'React.js',
      'React',
      'Next.js',
      'Next',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Node',
      'Express.js',
      'Express',
      'MongoDB',
      'MySQL',
      'Tailwind CSS',
      'Tailwind',
      'shadcn/ui',
      'shadcn',
      'Framer Motion',
      'Docker',
      'Git',
      'AWS',
      'Firebase',
      'Stripe',
    ];

    const foundSkills: string[] = [];
    skillKeywords.forEach((skill) => {
      const regex = new RegExp(
        `\\b${skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`,
        'gi'
      );
      if (
        regex.test(content) &&
        !foundSkills.some((s) => s.toLowerCase() === skill.toLowerCase())
      ) {
        foundSkills.push(skill);
      }
    });
    allSkills = foundSkills;
  }

  // Categorize skills for pie chart
  const frontendSkills = [
    'react',
    'next',
    'typescript',
    'javascript',
    'tailwind',
    'shadcn',
    'framer',
    'css',
    'html',
    'scss',
    'mui',
  ];
  const backendSkills = ['node', 'express'];
  const databaseSkills = ['mongodb', 'mysql', 'postgresql', 'supabase'];

  const categorizeSkills = (skills: string[]) => {
    const categories = {
      frontend: 0,
      backend: 0,
      database: 0,
      other: 0,
    };

    skills.forEach((skill) => {
      const skillLower = skill.toLowerCase();
      if (frontendSkills.some((fs) => skillLower.includes(fs))) {
        categories.frontend++;
      } else if (backendSkills.some((bs) => skillLower.includes(bs))) {
        categories.backend++;
      } else if (databaseSkills.some((ds) => skillLower.includes(ds))) {
        categories.database++;
      } else {
        categories.other++;
      }
    });

    return categories;
  };

  const skillCategories = categorizeSkills(allSkills);
  const totalSkills = allSkills.length;

  // Prepare pie chart data
  const pieData = [
    {
      category: 'frontend',
      value: skillCategories.frontend,
      fill: 'hsl(var(--chart-1))',
      label: 'Frontend',
    },
    {
      category: 'backend',
      value: skillCategories.backend,
      fill: 'hsl(var(--chart-2))',
      label: 'Backend',
    },
    {
      category: 'database',
      value: skillCategories.database,
      fill: 'hsl(var(--chart-3))',
      label: 'Database',
    },
    {
      category: 'other',
      value: skillCategories.other,
      fill: 'hsl(var(--chart-4))',
      label: 'Other',
    },
  ].filter((item) => item.value > 0);

  const chartConfig: ChartConfig = {
    frontend: {
      label: 'Frontend',
      color: 'hsl(var(--chart-1))',
    },
    backend: {
      label: 'Backend',
      color: 'hsl(var(--chart-2))',
    },
    database: {
      label: 'Database',
      color: 'hsl(var(--chart-3))',
    },
    other: {
      label: 'Other',
      color: 'hsl(var(--chart-4))',
    },
  } satisfies ChartConfig;

  // Check if it mentions "perfect match", "excellent match", "ideal match", etc.
  const isHighMatch =
    /perfect match|excellent match|ideal match|strong match/i.test(content);

  // Calculate a match score based on keywords and skills count
  let matchScore = 75; // default
  if (isHighMatch) matchScore = 90;
  if (allSkills.length > 5) matchScore = Math.min(95, matchScore + 5);
  if (content.includes('exceeds')) matchScore = Math.min(95, matchScore + 5);

  // Prepare match analysis pie chart data - show match score as filled portion
  const matchColor =
    matchScore >= 85
      ? 'hsl(var(--chart-1))'
      : matchScore >= 70
        ? 'hsl(var(--chart-2))'
        : 'hsl(var(--chart-3))';
  const matchLabel =
    matchScore >= 85
      ? 'Perfect Match'
      : matchScore >= 70
        ? 'Good Match'
        : 'Partial Match';

  const matchPieData = [
    {
      category: 'match',
      value: matchScore,
      fill: matchColor,
      label: matchLabel,
    },
    {
      category: 'remaining',
      value: 100 - matchScore,
      fill: 'hsl(var(--muted))',
      label: 'Remaining',
    },
  ];

  const matchChartConfig: ChartConfig = {
    match: {
      label: matchLabel,
      color: matchColor,
    },
    remaining: {
      label: 'Remaining',
      color: 'hsl(var(--muted))',
    },
  } satisfies ChartConfig;

  // Extract "Why Yash is a Perfect Fit" section
  const fitMatch = content.match(
    /\*\*Why Yash is a (Perfect|Great|Excellent) Fit:\*\*([\s\S]*?)(?=\*\*|Would you|$)/
  );
  const fitText = fitMatch ? fitMatch[2] : '';

  return (
    <div className="space-y-4">
      {/* Match Analysis Card with Pie Chart */}
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <div className="mb-2 flex items-center gap-2">
            <Award className="text-primary size-5" />
            <CardTitle className="text-lg">Match Analysis</CardTitle>
          </div>
          <CardDescription className="text-xs">
            {matchScore}% overall match based on skills, experience, and
            requirements
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={matchChartConfig}
            className="mx-auto aspect-square max-h-[200px]"
          >
            <PieChart>
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    nameKey="category"
                    labelKey="label"
                    indicator="dot"
                    labelFormatter={(_, payload) => {
                      return payload?.[0]?.payload?.label || '';
                    }}
                  />
                }
              />
              <Pie
                data={matchPieData}
                dataKey="value"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={70}
                innerRadius={45}
                // label={({ name, value, percent }) => {
                //   if (name === 'match' && percent) {
                //     return `${value}% (${(percent * 100).toFixed(0)}%)`;
                //   }
                //   return '';
                // }}
                // labelLine={true}
              >
                {/* Center label */}
                <Label
                  value={matchScore + '%'}
                  position="center"
                  className="fill-foreground text-2xl font-bold"
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Key Requirements Match */}
      {/* {requirementsText && (
        <div className="rounded-lg border bg-muted/50 p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h4 className="font-semibold">Key Requirements Match</h4>
          </div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => <p className="mb-2 last:mb-0 break-words text-sm">{children}</p>,
              strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1 text-sm">{children}</ul>,
              li: ({ children }) => <li className="break-words">{children}</li>,
            }}
          >
            {requirementsText.trim()}
          </ReactMarkdown>
        </div>
      )} */}

      {/* Matching Skills with Pie Chart */}
      {allSkills.length > 0 && (
        <div className="space-y-4">
          <div className="bg-muted/50 rounded-lg border p-4">
            <h4 className="mb-3 font-semibold">Matching Skills</h4>
            <div className="flex flex-wrap gap-2">
              {allSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 text-sm"
                >
                  <CheckCircle2 className="mr-1 size-3 text-green-500" />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Skill Distribution Pie Chart */}
          {pieData.length > 0 && totalSkills > 0 && (
            <Card className="flex flex-col">
              <CardHeader className="items-center pb-0">
                <CardTitle className="text-base">Skill Distribution</CardTitle>
                <CardDescription className="text-xs">
                  {totalSkills} matching skill{totalSkills !== 1 ? 's' : ''}{' '}
                  categorized
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pb-4">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square h-[250px] w-full"
                >
                  <PieChart>
                    <ChartTooltip
                      content={
                        <ChartTooltipContent
                          nameKey="category"
                          labelKey="label"
                          indicator="dot"
                          labelFormatter={(_, payload) => {
                            return payload?.[0]?.payload?.label || '';
                          }}
                        />
                      }
                    />
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="category"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      innerRadius={0}
                      label={({ value, percent }) => {
                        // Only show label if segment is large enough
                        if (!percent || percent < 0.05) return '';
                        return `${value}`;
                      }}
                      labelLine={false}
                    />
                  </PieChart>
                </ChartContainer>
                {/* Legend */}
                <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs">
                  {pieData.map((item, index) => (
                    <div key={index} className="flex items-center gap-1.5">
                      <div
                        className="size-3 rounded-full"
                        style={{ backgroundColor: item.fill }}
                      />
                      <span className="text-muted-foreground">
                        {item.label}: {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Why Yash is a Perfect Fit */}
      {fitText && (
        <div className="bg-muted/50 rounded-lg border p-4">
          <h4 className="mb-3 font-semibold">Why Yash is a Perfect Fit</h4>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => (
                <p className="mb-2 break-words text-sm last:mb-0">{children}</p>
              ),
              strong: ({ children }) => (
                <strong className="text-foreground font-semibold">
                  {children}
                </strong>
              ),
              ul: ({ children }) => (
                <ul className="mb-2 list-inside list-disc space-y-1 text-sm">
                  {children}
                </ul>
              ),
              li: ({ children }) => <li className="break-words">{children}</li>,
            }}
          >
            {fitText.trim()}
          </ReactMarkdown>
        </div>
      )}

      {/* Remaining content (contact info, etc.) */}
      {(() => {
        // Extract content after "Why Yash is a Perfect Fit" section
        const afterFitMatch = content.match(
          /\*\*Why Yash is a (Perfect|Great|Excellent) Fit:\*\*([\s\S]*)/
        );
        if (afterFitMatch) {
          let remainingText = afterFitMatch[2];
          // Remove the fit text we already displayed
          if (fitText) {
            remainingText = remainingText.replace(fitText, '');
          }
          // Remove skills sections
          remainingText = remainingText.replace(/\[SKILLS:[^\]]+\]/g, '');
          // Remove "Matching Skills:" header if present
          remainingText = remainingText.replace(
            /\*\*Matching Skills:\*\*/g,
            ''
          );
          remainingText = remainingText.trim();

          if (remainingText && remainingText.length > 20) {
            return (
              <div className="bg-muted/30 mt-4 rounded-lg border p-4">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ children }) => (
                      <p className="mb-2 break-words text-sm last:mb-0">
                        {children}
                      </p>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold">{children}</strong>
                    ),
                    ul: ({ children }) => (
                      <ul className="mb-2 list-inside list-disc space-y-1 text-sm">
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => (
                      <li className="break-words">{children}</li>
                    ),
                  }}
                >
                  {remainingText}
                </ReactMarkdown>
              </div>
            );
          }
        }
        return null;
      })()}
    </div>
  );
}

// Component to render message content with markdown and skill badges
function MessageContent({ content }: { content: string }) {
  // Check if this is a job match analysis response
  // Strict detection - require strong job-related indicators
  const hasStrongJobKeywords =
    /perfect match|excellent match|ideal match|strong match|job description|requirements match|key requirements match|thank you for sharing.*job|position at|role at|looking for.*developer|looking for.*engineer/i.test(
      content
    );
  const hasSkillsFormat = /\[SKILLS:/.test(content);

  // Only show job match analysis if:
  // 1. Has strong job keywords AND skills format, OR
  // 2. Has "Key Requirements Match" section (specific to job responses)
  const hasKeyRequirementsSection = /\*\*Key Requirements Match:\*\*/i.test(
    content
  );

  const isJobMatch =
    (hasStrongJobKeywords && hasSkillsFormat) || hasKeyRequirementsSection;

  if (isJobMatch) {
    return <JobMatchAnalysis content={content} />;
  }
  // Parse skills from format: [SKILLS: skill1, skill2, skill3]
  const skillsRegex = /\[SKILLS:\s*([^\]]+)\]/g;
  const parts: Array<{
    type: 'text' | 'skills';
    content: string;
    skills?: string[];
  }> = [];
  let lastIndex = 0;
  let match;

  while ((match = skillsRegex.exec(content)) !== null) {
    // Add text before skills
    if (match.index > lastIndex) {
      parts.push({
        type: 'text',
        content: content.substring(lastIndex, match.index),
      });
    }

    // Add skills
    const skillsList = match[1]
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    parts.push({
      type: 'skills',
      content: '',
      skills: skillsList,
    });

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < content.length) {
    parts.push({
      type: 'text',
      content: content.substring(lastIndex),
    });
  }

  // If no skills found, just return the content as markdown
  if (parts.length === 0 || (parts.length === 1 && parts[0].type === 'text')) {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => (
            <p className="mb-2 break-words last:mb-0">{children}</p>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold">{children}</strong>
          ),
          ul: ({ children }) => (
            <ul className="mb-2 list-inside list-disc space-y-1">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-2 list-inside list-decimal space-y-1">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="break-words">{children}</li>,
        }}
      >
        {content}
      </ReactMarkdown>
    );
  }

  // Render parts with skills as badges
  return (
    <div className="space-y-2">
      {parts.map((part, index) => {
        if (part.type === 'skills' && part.skills) {
          return (
            <div key={index} className="my-2 flex flex-wrap gap-2">
              {part.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          );
        }
        if (part.content.trim()) {
          return (
            <ReactMarkdown
              key={index}
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => (
                  <p className="mb-2 break-words last:mb-0">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold">{children}</strong>
                ),
                ul: ({ children }) => (
                  <ul className="mb-2 list-inside list-disc space-y-1">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-2 list-inside list-decimal space-y-1">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="break-words">{children}</li>
                ),
              }}
            >
              {part.content}
            </ReactMarkdown>
          );
        }
        return null;
      })}
    </div>
  );
}

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content:
        "Hello! I'm here to help you learn about Yash Kapure - his skills, projects, experience, and professional background.\n\n**For Recruiters:** If you have a job description or role requirements, feel free to paste it here and I'll provide a detailed match analysis showing how Yash's skills and experience align with your needs.\n\n**For Visitors:** You can ask me about Yash's technical skills, notable projects, work experience, or anything else you'd like to know. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPredefinedQuestions, setShowPredefinedQuestions] =
    React.useState(false);
  const [showPopup, setShowPopup] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Check if it's the first time visiting the site (show popup)
  React.useEffect(() => {
    const hasSeenPopup = localStorage.getItem(POPUP_SEEN_KEY);
    if (!hasSeenPopup) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Check if it's the first time opening the chat
  React.useEffect(() => {
    if (isOpen) {
      const isFirstTime = !localStorage.getItem(FIRST_TIME_KEY);
      setShowPredefinedQuestions(isFirstTime);
    }
  }, [isOpen]);

  // Hide popup when chat is opened
  React.useEffect(() => {
    if (isOpen && showPopup) {
      setShowPopup(false);
      localStorage.setItem(POPUP_SEEN_KEY, 'true');
    }
  }, [isOpen, showPopup]);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem(POPUP_SEEN_KEY, 'true');
  };

  const handleOpenChatFromPopup = () => {
    setShowPopup(false);
    localStorage.setItem(POPUP_SEEN_KEY, 'true');
    setIsOpen(true);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus input when chat opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, messages]);

  const handleQuestionClick = async (question: string) => {
    setShowPredefinedQuestions(false);
    localStorage.setItem(FIRST_TIME_KEY, 'false');

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: question,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Include the new user message in the API call
      const allMessages = [...messages, userMessage];
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: allMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ error: 'Unknown error' }));
        console.error('API Error:', errorData);
        throw new Error(
          errorData.error || `Failed to get response: ${response.status}`
        );
      }

      const data = await response.json();
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content:
          error instanceof Error
            ? `Sorry, I encountered an error: ${error.message}. Please check your API configuration.`
            : 'Sorry, I encountered an error. Please try again later.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const messageText = input.trim();
    if (!messageText || isLoading) return;

    // Hide predefined questions after first message
    if (showPredefinedQuestions) {
      setShowPredefinedQuestions(false);
      localStorage.setItem(FIRST_TIME_KEY, 'false');
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Include the new user message in the API call
      const allMessages = [...messages, userMessage];
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: allMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ error: 'Unknown error' }));
        console.error('API Error:', errorData);
        throw new Error(
          errorData.error || `Failed to get response: ${response.status}`
        );
      }

      const data = await response.json();
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content:
          error instanceof Error
            ? `Sorry, I encountered an error: ${error.message}. Please check your API configuration.`
            : 'Sorry, I encountered an error. Please try again later.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* First-time Visitor Popup/Tooltip */}
      <AnimatePresence>
        {showPopup && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
            className="fixed bottom-24 right-4 z-50 w-[280px] sm:bottom-28 sm:right-6 sm:w-[320px]"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="border-primary/20 bg-background relative rounded-lg border-2 p-4 shadow-2xl"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClosePopup}
                className="text-muted-foreground hover:text-foreground absolute right-2 top-2 rounded-full p-1 transition-colors"
                aria-label="Close popup"
              >
                <X className="size-4" />
              </motion.button>

              {/* Content */}
              <div className="pr-6">
                <div className="mb-2 flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    <Bot className="text-primary size-5" />
                  </motion.div>
                  <div className="flex items-center gap-1">
                    <Sparkles className="text-primary size-4" />
                    <h4 className="font-semibold">AI Assistant Available</h4>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  Hi! I&apos;m an AI-powered assistant here to help you learn
                  about Yash Kapure. Ask me about his skills, projects,
                  experience, or paste a job description for a match analysis!
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={handleOpenChatFromPopup}
                    size="sm"
                    className="w-full"
                  >
                    <MessageCircle className="mr-2 size-4" />
                    Start Chatting
                  </Button>
                </motion.div>
              </div>

              {/* Arrow pointing to chat button */}
              <div className="absolute -bottom-2 right-8">
                <div className="border-primary/20 bg-background size-4 rotate-45 border-b-2 border-r-2"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.3,
            }}
            className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setIsOpen(!isOpen)}
                size="icon"
                className="size-14 rounded-full shadow-lg"
                aria-label="Open chat"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <MessageCircle className="size-6" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            className="bg-background fixed bottom-4 right-4 z-50 flex h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] max-w-md flex-col rounded-lg border shadow-2xl sm:bottom-6 sm:right-6 sm:h-[650px] sm:w-full"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="bg-primary flex size-8 items-center justify-center rounded-full">
                  <MessageCircle className="text-primary-foreground size-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">AI Assistant</h3>
                    <span className="relative flex size-2">
                      <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative flex size-2 rounded-full bg-green-400"></span>
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Active • Ask me anything
                  </p>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="size-8"
                  aria-label="Close chat"
                >
                  <X className="size-4" />
                </Button>
              </motion.div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index === messages.length - 1 ? 0.1 : 0,
                    }}
                    className={cn(
                      'flex w-full',
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={cn(
                        'max-w-[80%] rounded-2xl px-4 py-2 text-sm',
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      )}
                    >
                      {message.role === 'assistant' ? (
                        <MessageContent content={message.content} />
                      ) : (
                        <p className="whitespace-pre-wrap break-words">
                          {message.content}
                        </p>
                      )}
                      <span className="mt-1 block text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl px-4 py-2">
                      <Loader2 className="text-muted-foreground size-4 animate-spin" />
                    </div>
                  </div>
                )}

                {/* Predefined Questions - Show only on first time */}
                {showPredefinedQuestions &&
                  messages.length === 1 &&
                  !isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-2 pt-2"
                    >
                      <p className="text-muted-foreground mb-2 text-xs">
                        Suggested questions:
                      </p>
                      {PREDEFINED_QUESTIONS.map((question, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuestionClick(question)}
                            className="h-auto w-full justify-start whitespace-normal rounded-md px-3 py-2 text-left text-sm"
                          >
                            {question}
                          </Button>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input Area */}
            <form onSubmit={handleSend} className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend(e);
                    }
                  }}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || isLoading}
                  className="size-10"
                >
                  {isLoading ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <Send className="size-4" />
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
