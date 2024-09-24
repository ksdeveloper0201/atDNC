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


const formSchema = z.object({
    goalTitle: z.string().min(2, {
        message: "Goal title must be at least 2 characters.",
    }),
    goalDescription: z.string().min(2, {
        message: "Goal description must be at least 2 characters.",
    }),
    goalPriority: z.string().min(2, {
        message: "Goal priority must be at least 2 characters.",
    }),
    goalDeadline: z.date(),
    goalCoin: z.number().min(2, {
        message: "Goal priority must be at least 2 characters.",
    }),
    currentCoin: z.number().min(2, {
        message: "Goal priority must be at least 2 characters.",
    }),
    goalBox: z.number().min(2, {
        message: "Goal priority must be at least 2 characters.",
    }),
})

const TsumuTodoForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            goalTitle: "",
            goalDescription: "",
            goalPriority: "",
            goalDeadline: new Date(),
            goalCoin: 0,
            goalBox: 0,
            currentCoin: 0,
        },
    })

    const { watch, setValue } = form

    const goalCoinValue = watch('goalCoin')
    const goalBoxValue = watch('goalBox')


    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="md:w-3/4 w-4/5 flex flex-col mx-auto">
                    <div>目標を設定してください</div>
                    <div>下の入力欄に対して目標となる情報を入れてください。</div>
                    <FormField
                        control={form.control}
                        name="goalTitle"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ゴールタイトル</FormLabel>
                                <FormControl>
                                    <Input placeholder="ゴールタイトルを入力" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="goalDescription"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ゴール詳細</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="ゴールの詳細" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="goalDeadline"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>ゴール期日</FormLabel>
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
                                    目標となる日付を設定してください。
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="goalPriority"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>優先度</FormLabel>
                                <FormControl>
                                    <Input placeholder="優先度を入力" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="goalCoin"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>目標コイン数{goalCoinValue !== 0 && goalCoinValue / 30000 >= 1 ? ` <ボックス回数：${Math.floor(goalCoinValue / 30000)}回分>` : ''}</FormLabel>
                                <FormControl>
                                    <Input placeholder="目標コイン数を入力" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="goalBox"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>目標プレゼントボックス数{goalBoxValue !== 0 ? ` <コイン数：${goalBoxValue * 30000}枚>` : ''}</FormLabel>
                                <FormControl>
                                    <Input placeholder="目標プレゼントボックス数を入力" {...field} disabled={!([0, ''].includes(goalCoinValue))} />
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
                                    <Input placeholder="現在のコイン数を入力" {...field} disabled={!([0, ''].includes(goalBoxValue))} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Form >
    )
}


export default TsumuTodoForm
