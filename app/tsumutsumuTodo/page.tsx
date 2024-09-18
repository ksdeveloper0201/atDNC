/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tow8ZcoAXmY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <div className="flex flex-col items-center justify-center flex-1 px-4 py-8 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-foreground">Welcome to Goal Tracker</h2>
                        <p className="mt-2 text-center text-muted-foreground">
                            Set your goals and track your progress with our easy-to-use app.
                        </p>
                    </div>
                    <Link href="#" className="w-full" prefetch={false}>
                        <Button size="lg" className="w-full">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 px-4 py-8 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-foreground">Set Your Goal</h2>
                        <p className="mt-2 text-center text-muted-foreground">Enter the details of your goal to get started.</p>
                    </div>
                    <form className="space-y-6">
                        <div>
                            <Label htmlFor="goal-title">Goal Title</Label>
                            <Input id="goal-title" placeholder="Enter your goal title" />
                        </div>
                        <div>
                            <Label htmlFor="goal-description">Goal Description</Label>
                            <Textarea id="goal-description" placeholder="Describe your goal in detail" rows={3} />
                        </div>
                        <div>
                            <Label htmlFor="goal-deadline">Goal Deadline</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full justify-start text-left">
                                        <span className="font-semibold uppercase text-[0.65rem]">Deadline</span>
                                        <span className="font-normal">Select a date</span>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="p-0 max-w-[276px]">
                                    <Calendar />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div>
                            <Label htmlFor="goal-priority">Goal Priority</Label>
                            <Select>
                                <SelectTrigger id="goal-priority">
                                    <SelectValue placeholder="Select priority" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="low">Low</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="high">High</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button type="submit" size="lg" className="w-full">
                            Create Goal
                        </Button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 px-4 py-8 sm:px-6 lg:px-8">
                <div className="max-w-6xl w-full">
                    <h2 className="text-3xl font-extrabold text-foreground mb-8">Your Goal Tasks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Finish Wireframing</CardTitle>
                                <CardDescription>Complete the initial wireframes for the new website design.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Calendar
                                    numberOfMonths={1}
                                    mode="range"
                                    className="p-0 [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-6"
                                />
                            </CardContent>
                            <CardFooter>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">
                                        Due by: <span className="font-semibold">April 30, 2024</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="icon">
                                            <FilePenIcon className="w-4 h-4" />
                                            <span className="sr-only">Edit</span>
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <TrashIcon className="w-4 h-4" />
                                            <span className="sr-only">Delete</span>
                                        </Button>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Write Blog Post</CardTitle>
                                <CardDescription>Compose a new blog post on the latest industry trends.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Calendar
                                    numberOfMonths={1}
                                    mode="range"
                                    className="p-0 [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-6"
                                />
                            </CardContent>
                            <CardFooter>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">
                                        Due by: <span className="font-semibold">May 15, 2024</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="icon">
                                            <FilePenIcon className="w-4 h-4" />
                                            <span className="sr-only">Edit</span>
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <TrashIcon className="w-4 h-4" />
                                            <span className="sr-only">Delete</span>
                                        </Button>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Develop New Feature</CardTitle>
                                <CardDescription>Implement the new feature for the upcoming product release.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Calendar
                                    numberOfMonths={1}
                                    mode="range"
                                    className="p-0 [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-6"
                                />
                            </CardContent>
                            <CardFooter>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">
                                        Due by: <span className="font-semibold">June 1, 2024</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="icon">
                                            <FilePenIcon className="w-4 h-4" />
                                            <span className="sr-only">Edit</span>
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <TrashIcon className="w-4 h-4" />
                                            <span className="sr-only">Delete</span>
                                        </Button>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FilePenIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
        </svg>
    )
}


function TrashIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    )
}