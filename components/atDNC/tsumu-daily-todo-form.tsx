"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

import { cn } from "@/lib/utils"

import { FaRegCalendarAlt } from "react-icons/fa";
import { useEffect } from "react"
import { on } from "events"
import { useRouter } from 'next/navigation'


const formSchema = z.object({
    normaTitle: z.string().min(2, {
        message: "norma title must be at least 2 characters.",
    }),
    normaDescription: z.string().min(2, {
        message: "norma description must be at least 2 characters.",
    }),
    normaDeadline: z.date(),
    normaCoin: z.string(),
    currentCoin: z.string().min(2, {
        message: "norma priority must be at least 2 characters.",
    }),
    normaBox: z.string(),
})

interface TsumuDailyTodoFormProps {
    className?: string
}

const TsumuDailyTodoForm: React.FC<TsumuDailyTodoFormProps> = ({ className }) => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            normaTitle: "",
            normaDescription: "",
            normaDeadline: new Date(),
            normaCoin: '',
            normaBox: '',
            currentCoin: '',
        },
    })

    const router = useRouter()
    const { watch, setValue } = form

    const normaCoinValue = watch('normaCoin')
    const normaBoxValue = watch('normaBox')


    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const queryString = new URLSearchParams(values as any).toString()
        const redirectUrl = `/tsumutsumuTodo/todoInfo?${queryString}`
        console.log('queryString:', queryString)
        router.push(redirectUrl)
        // const nextPageUrl = 
        console.log('form value:', values)
    }

    function onError(values: any) {
        console.log('form error:', values)
    }


    return (
        <div className={cn(className)}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit, onError)} className="space-y-8">
                    <div className="md:w-3/4 w-4/5 flex flex-col mx-auto gap-4">
                        <div className="font-bold text-2xl">日々のノルマ設定</div>
                        <div>下の入力欄に対して目標となる情報を入れてください。</div>
                        <FormField
                            control={form.control}
                            name="normaTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ノルマタイトル</FormLabel>
                                    <FormControl>
                                        <Input placeholder="ノルマタイトルを入力" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="normaDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ノルマ詳細</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="ノルマの詳細" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="normaDeadline"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>ノルマ継続期日</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[240px] pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <FaRegCalendarAlt className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date > new Date() || date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription>
                                        ノルマを継続する日付を設定してください。
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* <FormField
                        control={form.control}
                        name="normaPriority"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>優先度</FormLabel>
                                <FormControl>
                                    <Input placeholder="優先度を入力" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}
                        <FormField
                            control={form.control}
                            name="normaCoin"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ノルマコイン数{parseInt(normaCoinValue) !== 0 && parseInt(normaCoinValue) / 30000 >= 1 ? ` <ボックス数: ${Math.floor(parseInt(normaCoinValue) / 30000)}回分>` : ' <ボックス数: 0回分>'}</FormLabel>
                                    <FormControl>
                                        <Input placeholder="ノルマコイン数を入力" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="normaBox"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ノルマプレゼントボックス数{!(['0', ''].includes(normaBoxValue)) ? ` <コイン数：${parseInt(normaBoxValue) * 30000}枚>` : ''}</FormLabel>
                                    <FormControl>
                                        <Input placeholder="ノルマプレゼントボックス数を入力" {...field} disabled={!([0, ''].includes(normaCoinValue))} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="currentCoin"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>現在のコイン数</FormLabel>
                                    <FormControl>
                                        <Input placeholder="現在のコイン数を入力" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </Form >
        </div>
    )
}


export default TsumuDailyTodoForm
