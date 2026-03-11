import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle, Phone } from 'lucide-react';
import { tourists } from '@/data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  open: boolean;
  onClose: () => void;
  experienceTitle: string;
  price: number;
  currency: string;
}

export default function BookingModal({ open, onClose, experienceTitle, price, currency }: Props) {
  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
  const [selectedTourist, setSelectedTourist] = useState(tourists[0]);

  const commission = Math.round(price * 0.08);

  const handleBook = () => setStep('payment');
  const handlePay = () => setStep('success');

  const handleClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display">
            {step === 'form' && 'Book Experience'}
            {step === 'payment' && 'M-Pesa Payment'}
            {step === 'success' && 'Booking Confirmed!'}
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {step === 'form' && (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground">Experience</label>
                <p className="text-sm text-muted-foreground mt-1">{experienceTitle}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Select Traveler</label>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  {tourists.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTourist(t)}
                      className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-colors ${
                        selectedTourist.id === t.id ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted'
                      }`}
                    >
                      <span className="text-2xl">{t.avatar}</span>
                      <div>
                        <p className="text-sm font-medium text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.city}, {t.country}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-border">
                <span className="font-medium text-foreground">Total</span>
                <span className="text-xl font-bold text-primary">{currency} {price.toLocaleString()}</span>
              </div>
              <button onClick={handleBook} className="w-full gradient-sunset text-primary-foreground py-3 rounded-lg font-semibold">
                Proceed to Payment
              </button>
            </motion.div>
          )}

          {step === 'payment' && (
            <motion.div key="payment" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="bg-savannah/10 p-4 rounded-lg text-center">
                <Phone className="h-10 w-10 text-savannah mx-auto mb-2" />
                <p className="font-medium text-foreground">Simulated M-Pesa Payment</p>
                <p className="text-sm text-muted-foreground mt-1">Enter your M-Pesa PIN on your phone</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Amount</span><span className="font-medium text-foreground">{currency} {price.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">ASILI360 Commission</span><span className="font-medium text-foreground">{currency} {commission}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Payment Method</span><span className="font-medium text-foreground">M-Pesa</span></div>
              </div>
              <button onClick={handlePay} className="w-full bg-savannah text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Confirm Payment (Simulated)
              </button>
            </motion.div>
          )}

          {step === 'success' && (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-4 py-4">
              <CheckCircle className="h-16 w-16 text-savannah mx-auto" />
              <div>
                <p className="font-display text-lg font-semibold text-foreground">Payment Successful!</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {selectedTourist.name} from {selectedTourist.city} booked <strong>{experienceTitle}</strong> for <strong>{currency} {price.toLocaleString()}</strong>
                </p>
              </div>
              <div className="bg-muted p-3 rounded-lg text-xs text-muted-foreground">
                <p>Payment: {currency} {price.toLocaleString()} via M-Pesa</p>
                <p>ASILI360 commission: {currency} {commission}</p>
              </div>
              <button onClick={handleClose} className="w-full gradient-sunset text-primary-foreground py-3 rounded-lg font-semibold">
                Done
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
