import AllElements from "@/components/tsumutsumuTodo/allElements";
import TsumuDailyTodoForm from "@/components/tsumutsumuTodo/tsumuDailyTodoForm";
import TsumuTodoForm from "@/components/tsumutsumuTodo/tsumuTodoForm";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const tsumutsumuTodo = () => {
    return (
        <>
            <div className="grid gap-4">

                <div className=" text-2xl font-bold">まずは目標を設定しましょう。</div>
                <div className="grid gap-4">
                    <div>
                        <p>期日までに○回引くことを目標とする場合</p>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-2xl">ゴールから設定する</AccordionTrigger>
                                <AccordionContent>
                                    <TsumuTodoForm className="my-6" />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div>
                        <p>日々までにコイン○枚貯めることを目標とする場合</p>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-2xl">日々のノルマから設定する</AccordionTrigger>
                                <AccordionContent>
                                    <TsumuDailyTodoForm className="my-8" />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
}

export default tsumutsumuTodo;