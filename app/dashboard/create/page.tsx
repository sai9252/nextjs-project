import { handleSubmit } from "@/app/actions";
import { SubmitButton } from "@/components/general/SubmitButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogRoute() {
    return (
        <div>
            <Card className="max-w-lg mx-auto mt-10 style-poppins">
                <CardHeader>
                    <CardTitle>
                        Create a new blog post
                    </CardTitle>
                    <CardDescription>Create a new post to share with the world</CardDescription>
                </CardHeader>
                    <CardContent>
                        <form className="flex flex-col gap-4" action={handleSubmit}>
                            <div className="flex flex-col gap-2">
                                <Label>Title</Label>
                                <Input name="title" required type="text" placeholder="Title"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Content</Label>
                                <Textarea name="content" required placeholder="Content"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Image URL</Label>
                                <Input name="url" required placeholder="Image url" type="url"/>
                            </div>

                            <SubmitButton/>
                        </form>
                    </CardContent>
            </Card>
        </div>
    );
}