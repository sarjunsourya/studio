
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkAdminSession, adminLogout } from "@/lib/actions";
import { useFirestore, useCollection, useAuth, useUser } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { signInAnonymously } from "firebase/auth";
import { useMemoFirebase } from "@/firebase/provider";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  LogOut, 
  LayoutDashboard, 
  Clock, 
  Hash, 
  Euro,
  ChevronRight,
  Loader2,
  Calendar,
  User as UserIcon
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { format } from "date-fns";

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  const firestore = useFirestore();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();

  // 1. Auth Guard & Firebase Session Sync
  useEffect(() => {
    async function verify() {
      if (isAuthenticated === true && user) return;

      const active = await checkAdminSession();
      if (!active) {
        router.push("/secure-dashboard-x7K9pL2vQ8Rz/login");
        return;
      }
      
      setIsAuthenticated(true);

      if (auth && !user && !isUserLoading) {
        try {
          await signInAnonymously(auth);
        } catch (e) {
          console.error("Firebase background sync failed:", e);
        }
      }
    }
    verify();
  }, [router, auth, user, isUserLoading, isAuthenticated]);

  // 2. Fetch Orders
  const ordersQuery = useMemoFirebase(() => {
    if (!firestore || !isAuthenticated || !user) return null;
    return query(collection(firestore, "orders"), orderBy("orderDate", "desc"));
  }, [firestore, isAuthenticated, user]);

  const { data: orders, isLoading } = useCollection(ordersQuery);

  if (isAuthenticated === null || (isAuthenticated && !user) || isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
        <p className="text-primary font-bold uppercase tracking-widest text-[10px]">Synchronizing Security Intelligence...</p>
      </div>
    );
  }

  const handleLogout = async () => {
    await adminLogout();
    router.push("/secure-dashboard-x7K9pL2vQ8Rz/login");
  };

  return (
    <div className="min-h-screen bg-[#051917] text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-white/5 bg-[#0a2e2a]/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <Logo className="scale-60 md:scale-75 origin-left" />
            <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />
            <div className="hidden sm:block">
              <h1 className="font-headline text-sm md:text-xl font-bold flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                COMMAND CENTER
              </h1>
              <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest">Global Ops</p>
            </div>
          </div>
          
          <Button 
            onClick={handleLogout}
            variant="ghost" 
            className="text-muted-foreground hover:text-white hover:bg-white/5 gap-2 text-xs h-9 md:h-10"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden lg:inline uppercase tracking-widest font-bold">Terminate Session</span>
            <span className="lg:hidden">EXIT</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
            {/* Quick Stats */}
            <div className="glass-card p-4 md:p-6 border-white/5 space-y-2 md:space-y-4">
                <div className="flex items-center gap-2 text-primary">
                    <Hash className="h-4 w-4" />
                    <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest">Orders</span>
                </div>
                <div className="text-2xl md:text-4xl font-bold">{orders?.length || 0}</div>
            </div>
            <div className="glass-card p-4 md:p-6 border-white/5 space-y-2 md:space-y-4">
                <div className="flex items-center gap-2 text-accent">
                    <Clock className="h-4 w-4" />
                    <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest">Active</span>
                </div>
                <div className="text-2xl md:text-4xl font-bold">
                    {orders?.filter(o => o.status === 'Pending').length || 0}
                </div>
            </div>
             <div className="glass-card p-4 md:p-6 border-white/5 space-y-2 md:space-y-4">
                <div className="flex items-center gap-2 text-primary">
                    <Euro className="h-4 w-4" />
                    <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest">Rev</span>
                </div>
                <div className="text-2xl md:text-4xl font-bold">
                    €{orders?.reduce((acc, curr) => acc + (curr.totalAmount || 0), 0).toFixed(0)}
                </div>
            </div>
            <div className="glass-card p-4 md:p-6 border-white/5 space-y-2 md:space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest">Updated</span>
                </div>
                <div className="text-[10px] md:text-sm font-medium text-white/60 truncate">
                    {orders?.[0] ? format(new Date(orders[0].orderDate), 'MMM d, HH:mm') : 'None'}
                </div>
            </div>
        </div>

        <div className="glass-card overflow-hidden border-white/5">
          <div className="p-6 md:p-8 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="font-headline text-xl md:text-2xl font-bold tracking-tight">Recent Intelligence</h2>
            <div className="flex gap-2">
                <Badge className="bg-primary/20 text-primary border-none text-[9px] px-2 py-0.5">ADMIN ONLY</Badge>
                <Badge variant="outline" className="border-white/10 text-white/40 text-[9px] px-2 py-0.5">LIVE</Badge>
            </div>
          </div>
          
          <ScrollArea className="w-full">
            <Table className="min-w-[700px] md:min-w-full">
              <TableHeader className="bg-white/5 sticky top-0 z-10">
                <TableRow className="border-white/5 hover:bg-transparent">
                  <TableHead className="w-[120px] text-primary uppercase tracking-widest text-[9px] md:text-[10px] font-bold">Order #</TableHead>
                  <TableHead className="text-primary uppercase tracking-widest text-[9px] md:text-[10px] font-bold">Customer</TableHead>
                  <TableHead className="text-primary uppercase tracking-widest text-[9px] md:text-[10px] font-bold">Completion</TableHead>
                  <TableHead className="text-primary uppercase tracking-widest text-[9px] md:text-[10px] font-bold">Total</TableHead>
                  <TableHead className="text-primary uppercase tracking-widest text-[9px] md:text-[10px] font-bold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders?.map((order) => (
                  <TableRow key={order.id} className="border-white/5 hover:bg-white/[0.02] transition-colors group">
                    <TableCell className="font-mono text-base md:text-lg font-bold text-white tracking-widest py-4 md:py-6">
                      {order.orderNumber}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <UserIcon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-semibold text-white text-sm">{order.customerName}</span>
                          <span className="text-[10px] text-muted-foreground truncate max-w-[120px] md:max-w-none">{order.customerEmail}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-white/60">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        <span className="text-xs md:text-sm font-medium">
                          {format(new Date(order.estimatedCompletionTime), 'HH:mm')}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-base md:text-lg font-bold">
                      €{order.totalAmount.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-background rounded-full h-8 px-4 text-[10px] font-bold">
                        OPEN <ChevronRight className="ml-1 h-3.5 w-3.5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {orders?.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-20 text-muted-foreground uppercase tracking-widest text-xs">
                      No order intelligence gathered yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </main>

      <footer className="py-8 md:py-10 border-t border-white/5 text-center px-6">
         <p className="text-[9px] md:text-[10px] text-muted-foreground/40 uppercase tracking-[0.2em] md:tracking-[0.3em]">
            Internal System • Property of The Divine Kitchen • Protected by TDK-Access-Protocol
         </p>
      </footer>
    </div>
  );
}
