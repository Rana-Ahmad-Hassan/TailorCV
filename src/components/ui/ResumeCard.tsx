type Props = {
  title: string;
  updatedAt?: string;
};

const ResumeCard = ({ title, updatedAt }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition p-3 cursor-pointer">
      <img src='https://lh3.googleusercontent.com/aida-public/AB6AXuBeC1Osvo_HXWRbKtSeRwtNkgKxskcHo1hbqJcvF4votAqJOEk1U24WxqLuAQLwOuhK1RP6KyZLk8ktwi3U_g1o8ATq9ZgJr8NP2hiFTipCYWs8t6iy5UuoCh1KYmAL_e6-QH0rAN8Kf4Ctm-hxXATqMksHwQtLRu75_m5dxT4lomGVgzQUbXF-Gged7QSRWMb9tch8PPODWKN-yuWgPqgP1WbI_Di1yw2WLulZFGU-qN4YMuU9w9JdR8pRVP3XWfZm-gOp7_PjKg' alt={title} className="rounded-md mb-3 h-[250px] w-full object-cover" />
      <h3 className="text-white font-medium">{title}</h3>
      <p className="text-gray-400 text-sm">Last updated: {updatedAt}</p>
    </div>
  );
};

export default ResumeCard;
