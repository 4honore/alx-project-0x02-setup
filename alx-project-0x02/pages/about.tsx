import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const AboutPage = () => {
    return (
    <>
        <Header />
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">About Page</h1>
            <Button
            size="small"
            shape="rounded-sm"
            text="add card"
            background="bg-blue-600 text-white"
            />
            <Button
            size="medium"
            shape="rounded-md"
            text="add card"
            background="bg-blue-600 text-white" 
            />
            <Button
            size="large"
            shape="rounded-lg"
            text="add card"
            background="bg-blue-600 text-white"
            />
            
            </div>
        </>
    );
};

export default AboutPage;