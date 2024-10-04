// import AllElements from "@/components/tsumutsumuTodo/allElements";
import TsumuDailyTodoForm from "@/components/tsumutsumuTodo/tsumuDailyTodoForm";
import TsumuTodoForm from "@/components/tsumutsumuTodo/tsumuTodoForm";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const SetTodoInfo = () => {
    return (
        <div>
            <div className="grid gap-6">
                <div className="p-6 bg-white shadow-md rounded-lg">
                    <p className="text-lg font-medium text-gray-700">
                        期日までに○回引くことを目標とする場合
                    </p>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-600 hover:text-indigo-800 transition">
                                ゴールから設定する
                            </AccordionTrigger>
                            <AccordionContent>
                                <TsumuTodoForm className="mt-6" />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="p-6 bg-white shadow-md rounded-lg">
                    <p className="text-lg font-medium text-gray-700">
                        日々までにコイン○枚貯めることを目標とする場合
                    </p>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-600 hover:text-indigo-800 transition">
                                日々のノルマから設定する
                            </AccordionTrigger>
                            <AccordionContent>
                                <TsumuDailyTodoForm className="mt-8" />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default SetTodoInfo;