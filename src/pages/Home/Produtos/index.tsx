import {     useState } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";

type ProductsProps = {
    name: string;
    image: string;
    price: string;
    category: string;
    status: boolean;
    rating?: number;
    inventoryStatus: "STOCK DISPONIVEL" | "BAIXO STOCK" | "SEM STOCK";
};

const PageProdutos = () => {
    const [products, setProducts] = useState<ProductsProps[]>([
        {
            name: "jordan",
            image: "https://imgnike-a.akamaihd.net/1300x1300/016511IN.jpg",
            category: "Tenis",
            price: "$350.90",
            status: true,
            rating: 3,
            inventoryStatus: "BAIXO STOCK",
        },
        {
            name: "sapato1",
            image: "https://artwalk.vteximg.com.br/arquivos/ids/376022-1000-1000/DV130-9-100-1.jpg?v=638175334310970000",
            category: "Tenis",
            price: "$350.90",
            status: true,
            rating: 5,
            inventoryStatus: "STOCK DISPONIVEL",
        },
        {
            name: "sapato2",
            image: "https://imgcentauro-a.akamaihd.net/900x900/M0W8QN01/tenis-nike-air-jordan-xxxvii-low-adulto-img.jpg",
            category: "Tenis",
            price: "$350.90",
            status: true,
            rating: 1,
            inventoryStatus: "SEM STOCK",
        },
        {
            name: "sapato2",
            image: "https://imgcentauro-a.akamaihd.net/900x900/M0W8QN01/tenis-nike-air-jordan-xxxvii-low-adulto-img.jpg",
            category: "Tenis",
            price: "$350.90",
            status: true,
            rating: 1,
            inventoryStatus: "SEM STOCK",
        },
        {
            name: "sapato2",
            image: "https://imgcentauro-a.akamaihd.net/900x900/M0W8QN01/tenis-nike-air-jordan-xxxvii-low-adulto-img.jpg",
            category: "Tenis",
            price: "$350.90",
            status: true,
            rating: 1,
            inventoryStatus: "SEM STOCK",
        },
    ]);

    const imageBodyTemplate = (item: ProductsProps) => {
        return (
            <img
                src={item.image}
                alt={item.image}
                className="w-32 shadow-2 border-round"
            />
        );
    };
    const ratingBodyTemplate = (item: ProductsProps) => {
        return <Rating value={item.rating} readOnly cancel={false} />;
    };
    const statusBodyTemplate = (item: ProductsProps) => {
        return (
            <Tag
                value={item.inventoryStatus}
                severity={getSeverity(item)}
            ></Tag>
        );
    };

    const getSeverity = (product: ProductsProps) => {
        switch (product.inventoryStatus) {
            case "STOCK DISPONIVEL":
                return "success";

            case "BAIXO STOCK":
                return "warning";

            case "SEM STOCK":
                return "danger";

            default:
                return null;
        }
    };
    setProducts;

    return (
        <div>
            <DataTable
                value={products}
                tableStyle={{ minWidth: "50rem" }}
                dataKey="id"
                paginator
                rows={10}
                onValueChange={(e) => console.log(e)}
                rowsPerPageOptions={[3, 5, 25]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            >
                <Column field="name" header="Name"></Column>
                <Column header="image" body={imageBodyTemplate}></Column>
                <Column field="price" header="Price"></Column>
                <Column field="category" header="Category"></Column>
                <Column
                    field="rating"
                    header="Reviews"
                    body={ratingBodyTemplate}
                ></Column>
                <Column header="Status" body={statusBodyTemplate}></Column>
            </DataTable>
        </div>
    );
};

export default PageProdutos;
