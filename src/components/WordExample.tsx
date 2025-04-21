import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface WordExampleProps {
  foreign: string;
  native: string;
  context?: string;
}

export function WordExample({ foreign, native, context }: WordExampleProps) {
  const [showNative, setShowNative] = useState(false);

  return (
    <Card className="p-4 hover:shadow-md transition-all hover:-translate-y-1">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-primary">
            {foreign}
          </h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowNative(!showNative)}
                >
                  {showNative ? "Скрыть" : "Показать замену"}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Нажмите, чтобы {showNative ? "скрыть" : "увидеть"} русский аналог</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        {showNative && (
          <div className="text-lg font-medium text-accent animate-fade-in">
            {native}
          </div>
        )}
        
        {context && (
          <p className="text-sm text-muted-foreground mt-2">
            <span className="italic">Пример:</span> {context}
          </p>
        )}
      </div>
    </Card>
  );
}
