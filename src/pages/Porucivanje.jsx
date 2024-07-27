import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Porucivanje = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Poručite Makalo</h1>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Vaša Narudžba</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Ime</Label>
                <Input id="name" placeholder="Vaše ime" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Vaš email" type="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="quantity">Količina</Label>
                <Input id="quantity" placeholder="Broj pakovanja" type="number" min="1" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Poruči</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Porucivanje;