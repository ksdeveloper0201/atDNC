
import SetTodoInfo from "@/components/atDNC/set-todo-info";


const atDNCPage = () => {
    return (
        <div className="container mx-auto px-6 py-8">
            <div className="text-center">
                <h1 className="font-bold text-gray-900 mb-6">
                    まずは目標を設定しましょう。
                </h1>
            </div>
            <SetTodoInfo />

        </div>
    );
};

export default atDNCPage;


