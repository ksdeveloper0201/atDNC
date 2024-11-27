// import AllElements from "@/components/tsumutsumuTodo/allElements";
import TsumuDailyTodoForm from "@/components/atDNC/tsumu-daily-todo-form";
import TsumuTodoForm from "@/components/atDNC/tsumu-todo-form";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const SetTodoInfo = () => {
    return (
        <div>
            <section className="grid gap-6">
                <div className="p-6 bg-white shadow-md rounded-lg">
                    <p className="text-gray-700">
                        期日までに○回引くことを目標とする場合
                    </p>

                    <TsumuTodoForm className="mt-6" />

                </div>

                {/* <div className="p-6 bg-white shadow-md rounded-lg">
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
                </div> */}
            </section>
        </div>
    );
}

export default SetTodoInfo;