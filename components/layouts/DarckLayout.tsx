import { FC } from "react"

type Props = {
  children: React.ReactNode
}


export const DarckLayout: FC<Props> = ({children}) => {
  return (
        <div style={{
            backgroundColor:'rgba(255,255,255,0.3)',
            padding:'10px',
            borderRadius:'5px'
        }} >
            <h3>DarkLayout</h3>
            <div>
                {children}
            </div>
            

        </div>
  );
};

