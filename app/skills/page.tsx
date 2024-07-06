import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const SkillPage: React.FC = () => {
  return (
    <div>
      <div className="menu-container flex justify-center pt-12">
        <ul className="list-inside">
          <li className="m-6 text-2xl">
            <span className="text-2xl">Python</span>
            <div>
              <Badge variant="outline">flask (API開発)</Badge>
              <Badge variant="outline">業務効率化ツール</Badge>
              <Badge variant="outline">Django (自己学習)</Badge>
              <Badge variant="outline">fastAPI (自己学習)</Badge>
            </div>
          </li>
          <Separator className="my-2" />
          <li className="m-6 text-2xl">
            <span className="text-2xl">TypeScript / JavaScript</span>
            <div>
              <Badge variant="outline">Vue</Badge>
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">React Native expo</Badge>
            </div>
          </li>
          <Separator className="my-2" />
          <li className="m-6 text-2xl">
            <span className="text-2xl">Power Shell</span>
            <div>
              <Badge variant="outline">業務用ツール</Badge>
            </div>
          </li>
          <Separator className="my-2" />
          <li className="m-6 text-2xl">
            <span className="text-2xl">Java</span>
            <div>
              <Badge variant="outline">資格学習レベル (Bronze)</Badge>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillPage;
