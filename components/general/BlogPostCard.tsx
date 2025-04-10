import Image from "next/image";
import Link from "next/link";

interface BlogPostCardProps {
    data: {
    title: string;
    authorName: string;
    authorImage: string;
    imageUrl: string;
    content: string;
    id: string;
    authorId: string;
    createdAt: Date;
    updatedAt:Date;
    }
}

export function BlogPostCard({data}: BlogPostCardProps) {
    return(
        <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <Link href={`/post/${data.id}`} className="w-full h-full block">
            <div className="relative h-48 w-full overflow-hidden">
            <Image src={data.imageUrl} alt="Image of Blog" className="object-contain transition-transform duration-300 group-hover:scale-105" fill/>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{data.title}</h3>
                <p className="mb-4 text-sm text-gray-600 line-clamp-2">{data.content}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full">
                            <Image src={data.authorImage} alt="Author Image" className="object-cover" fill/>
                        </div>
                        <p className="text-sm font-medium text-gray-700">{data.authorName}</p>
                    </div>
                    <div className="text-xs text-gray-500 space-x-1">
                        {new Date(data.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                        <div className="flex items-center justify-center">
                        {new Intl.DateTimeFormat('en-US',{
                            
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                        }).format(new Date(data.createdAt))} 
                        {` `}
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}