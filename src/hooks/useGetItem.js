import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useGetItem = () => {
    const [data, setData] = useState(null);
    const { category, id } = useParams();

    // METODOS DE FIREBASE
    const db = getFirestore();
    const refProps = [db, "items"];
    const ref = id ? doc(...refProps, id) : collection(...refProps);

    useEffect(() => {
        // FILTRAR POR CATEGORIAS
        if (category) {
            const q = query(ref, where("category", "==", category));
            getDocs(q).then((result) =>
                setData(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            );

            return;
        }

        // TRAER 1 ITEM
        if (id) {
            getDoc(ref)
                .then((item) => {
                    if (item.exists()) {
                        setData({ id: item.id, ...item.data() });
                    }
                })
                .catch((err) => console.error({ err }));
            return;
        }

        // TRAER TODOS LOS ITEMS
        getDocs(ref).then((result) =>
            setData(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        );
    }, []);

    return data;
};