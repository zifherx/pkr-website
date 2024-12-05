import { serviciosData } from "@/data";
import { ServicioPage } from "./components/ServicioPage";
import { NotFound } from "@/components/Shared/NotFound";

export async function generateStaticParams() {
    return serviciosData.map((item) => {
        return { slug: item.slug };
    });
}

export default function SlugServicePage({ params }: { params: { slug: string } }) {

    const filteredService = serviciosData.find((service) => service.slug === params.slug);
    return (
        <div className="min-h-screen border-2 border-red-500 p-10">
            {
                filteredService ? <ServicioPage /> : <NotFound />
            }
        </div>
    )
}
