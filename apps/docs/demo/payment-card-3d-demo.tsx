import { PaymentCard3D } from '@/components/ui/payment-card-3d';

const PaymentCard3DDemo = () => {
    return (
        <div className="h-96 w-full sm:h-[30rem]">
            <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-300 to-transparent [mask-image:radial-gradient(2400px_1200px_at_top,white,transparent_20%)] dark:from-amber-500/30"></div>
                <PaymentCard3D
                    cardHolder="Hemant Sharma"
                    cardNumber={1234567890123456}
                    cardExpiryMonth={12}
                    cardExpiryYear={28}
                    cardBankName="Swiss Bank"
                    themeColor="#FFC344"
                    chipColor="gold"
                />
            </div>
        </div>
    );
};

export default PaymentCard3DDemo;
