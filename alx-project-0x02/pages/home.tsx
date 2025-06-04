import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal"
import Header from "@/components/layout/Header";
import { useState } from "react";


export default function homePage() {
    const [isPostModel, setIsPostModel] = useState(false);
    const handleButtonclick = () => {
        setIsPostModel(true);
    };
    const handleClose = () => {
        setIsPostModel(false);
    };
    return (
        <>
            <Header />
            <div className="flex items-center justify-center h-screen gap-12">
                <h1 className="text-4xl font-black">Home page</h1>
                <Card title="card 1" content="card 1 content" />
                <Card title="card 2" content="card 2 content" />
                <Card title="card 3" content="card 3 content" />
                <Button
                size="large"
                shape="rounded-sm"
                text="add card"
                background="bg-blue-600 text-white"
                onClick={handleButtonclick}
                />
                {isPostModel && (
                    <div className="fixed top-0 w-full h-black bg-opacity-50 flex items-center justify-center z-50">
                        <PostModal onClick={handleCloseModel} />
                    </div>
                )}
            </div>
</>
  );
}
