import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Magija = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Magija Makala</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MagijaCard
          title="Tajna Receptura"
          content="Naša jedinstvena kombinacija sastojaka stvara neodoljiv ukus koji će vas očarati."
        />
        <MagijaCard
          title="Tradicija i Inovacija"
          content="Spajamo tradicionalne metode pripreme sa modernim kulinarskim tehnikama."
        />
        <MagijaCard
          title="Ljubav u Svakom Zalogaju"
          content="Svaki Makalo namaz pravimo s pažnjom i ljubavlju, baš kao da je za našu porodicu."
        />
      </div>
    </div>
  );
};

const MagijaCard = ({ title, content }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{content}</p>
    </CardContent>
  </Card>
);

export default Magija;