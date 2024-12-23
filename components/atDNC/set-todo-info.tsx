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
            </section>
        </div>
    );
}

export default SetTodoInfo;