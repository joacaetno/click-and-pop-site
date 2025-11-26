import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const ContentModal = ({ isOpen, onClose, title, content }: ContentModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Conteúdo personalizado
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 p-4 bg-muted/20 rounded-lg min-h-[200px]">
          <p className="text-foreground whitespace-pre-wrap">
            {content || "Conteúdo a ser adicionado..."}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
