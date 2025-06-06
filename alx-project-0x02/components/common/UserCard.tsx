import { User } from "@/interfaces";

const UserCard: React.FC<User> = ({ name, email, address}) => {
return (
<div className="bg-white text-black flex flex-col gap-4 p-4">
    <h1>name: {name}</h1>
    <p>Email: {email}</p>
    <p>street: {address.street}</p>
    <p>city: {address.city}</p>
</div>
);
};
export default UserCard;