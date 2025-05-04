import { supabase } from './lib/supabaseClient';

(async () => {
  const { data, error } = await supabase.from('products').select('*');
  console.log('Data:', data);
  console.error('Error:', error);
})();
