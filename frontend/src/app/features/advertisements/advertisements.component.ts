import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-advertisements',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './advertisements.component.html',
  styleUrl: './advertisements.component.scss'
})
export class AdvertisementsComponent {
  showModal = false;
  isViewMode = false;
  isEditMode = false;
  selectedFile: File | null = null;
  scheduleType: string = 'Recurring';
  occursType: string = 'Daily';
  searchTerm: string = '';
  isEmergencyCategory: boolean = false;
  
  // Form values for description
  occursOnceTime: string = '12:00';
  startingTime: string = '12:00';
  endingTime: string = '11:59';
  startDate: string = '2026-01-16';
  endDate: string = '2027-01-16';
  noEndDate: boolean = false;
  
  advertisements: any[] = [
    { addNo: 'Add-01', name: 'COCA-COLA', category: 'Commercial', duration: '30s', scheduleType: 'Recurring', loungeGroups: 'Group A,Group B', priority: 'Medium', status: 'Active' },
    { addNo: 'Add-02', name: 'Burger', category: 'Commercial', duration: '30s', scheduleType: 'Recurring', loungeGroups: 'Group A', priority: 'High', status: 'Active' },
    { addNo: 'Add-03', name: 'Pepsi-Cola', category: 'Internal branding', duration: '30s', scheduleType: 'On startup', loungeGroups: 'Group C', priority: 'High', status: 'Active' },
    { addNo: 'Add-04', name: 'Happy New Year!', category: 'Event', duration: '30s', scheduleType: 'One-time', loungeGroups: 'Group D', priority: 'Medium', status: 'Paused' },
    { addNo: 'Add-05', name: 'Chrismass', category: 'Seasonal', duration: '30s', scheduleType: 'Recurring', loungeGroups: 'Group E', priority: 'Low', status: 'Paused' }
  ];
  
  get filteredAdvertisements() {
    if (!this.searchTerm.trim()) {
      return this.advertisements;
    }
    const term = this.searchTerm.toLowerCase();
    return this.advertisements.filter(ad => 
      ad.addNo.toLowerCase().includes(term) ||
      ad.name.toLowerCase().includes(term) ||
      ad.category.toLowerCase().includes(term) ||
      ad.scheduleType.toLowerCase().includes(term) ||
      ad.loungeGroups.toLowerCase().includes(term) ||
      ad.priority.toLowerCase().includes(term) ||
      ad.status.toLowerCase().includes(term)
    );
  }
  
  viewData: any = {
    addNo: '',
    name: '',
    category: '',
    duration: '',
    scheduleType: '',
    loungeGroups: '',
    priority: '',
    status: '',
    fileName: '',
    description: ''
  };

  openModal() {
    this.isViewMode = false;
    this.isEditMode = false;
    this.isEmergencyCategory = false;
    this.showModal = true;
  }

  viewAdvertisement(addNo: string, name: string, category: string, duration: string, scheduleType: string, loungeGroups: string, priority: string, status: string) {
    this.isViewMode = true;
    this.isEditMode = false;
    this.isEmergencyCategory = category === 'Emergency';
    this.viewData = {
      addNo,
      name,
      category,
      duration,
      scheduleType,
      loungeGroups,
      priority,
      status,
      fileName: name + '_media.mp4', // Mock filename
      description: ''
    };
    this.scheduleType = scheduleType;
    this.showModal = true;
    this.updateDescription();
  }

  editAdvertisement(addNo: string, name: string, category: string, duration: string, scheduleType: string, loungeGroups: string, priority: string, status: string) {
    this.isViewMode = false;
    this.isEditMode = true;
    this.isEmergencyCategory = category === 'Emergency';
    this.viewData = {
      addNo,
      name,
      category,
      duration,
      scheduleType,
      loungeGroups,
      priority,
      status,
      fileName: name + '_media.mp4', // Mock filename
      description: ''
    };
    this.scheduleType = scheduleType;
    this.showModal = true;
    this.updateDescription();
  }

  closeModal() {
    this.showModal = false;
    this.isViewMode = false;
    this.isEditMode = false;
    this.selectedFile = null;
    this.scheduleType = 'Recurring';
    this.viewData = {
      addNo: '',
      name: '',
      category: '',
      duration: '',
      scheduleType: '',
      loungeGroups: '',
      priority: '',
      status: '',
      fileName: ''
    };
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Selected file:', this.selectedFile.name);
    }
  }

  onScheduleTypeChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.scheduleType = select.value;
    this.updateDescription();
  }

  onCategoryChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.viewData.category = select.value;
    this.isEmergencyCategory = select.value === 'Emergency';
    
    if (this.isEmergencyCategory) {
      // Auto-set emergency defaults
      this.viewData.priority = 'High';
      this.scheduleType = 'On startup';
      this.updateDescription();
    }
  }

  onOccursTypeChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.occursType = select.value;
    this.updateDescription();
  }

  updateDescription() {
    let description = '';
    
    // Emergency category override
    if (this.isEmergencyCategory) {
      description = '⚠️ EMERGENCY BROADCAST: This message will be displayed immediately on all selected lounge screens with highest priority. It will trigger automatically when the lounge display software boots up.';
      this.viewData.description = description;
      return;
    }
    
    if (this.scheduleType === 'Recurring') {
      // Format time to 12-hour format with AM/PM
      const formatTime = (time: string) => {
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hour12 = hour % 12 || 12;
        return `${hour12}:${minutes}:00 ${ampm}`;
      };
      
      if (this.occursType === 'Daily') {
        description = `Occurs every day at ${formatTime(this.occursOnceTime)}. `;
      } else if (this.occursType === 'Weekly') {
        description = `Occurs on selected weekdays at ${formatTime(this.occursOnceTime)}. `;
      } else if (this.occursType === 'Monthly') {
        description = `Occurs on the specified day of each month at ${formatTime(this.occursOnceTime)}. `;
      }
      
      // Format date to MM/DD/YYYY
      const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      };
      
      description += `Schedule will be used starting on ${formatDate(this.startDate)}`;
      
      if (!this.noEndDate) {
        description += ` and ending on ${formatDate(this.endDate)}`;
      }
      
    } else if (this.scheduleType === 'One-time') {
      description = 'Runs once at the specified date and time.';
    } else if (this.scheduleType === 'On startup') {
      description = 'Triggers automatically when lounge display software boots up.';
    } else if (this.scheduleType === 'On Idle') {
      description = 'Plays as filler when no other ads are scheduled to run.';
    }
    
    this.viewData.description = description;
  }

  saveAdvertisement() {
    if (this.isEditMode) {
      // Update existing advertisement
      const index = this.advertisements.findIndex(ad => ad.addNo === this.viewData.addNo);
      if (index !== -1) {
        this.advertisements[index] = { ...this.viewData };
      }
    } else {
      // Add new advertisement
      const newAddNo = 'Add-' + String(this.advertisements.length + 1).padStart(2, '0');
      const newAd = {
        addNo: newAddNo,
        name: this.viewData.name || 'New Ad',
        category: this.viewData.category || 'Commercial',
        duration: this.viewData.duration || '30s',
        scheduleType: this.scheduleType,
        loungeGroups: this.viewData.loungeGroups || 'Group A',
        priority: this.viewData.priority || 'Medium',
        status: 'Active'
      };
      this.advertisements.push(newAd);
    }
    this.closeModal();
  }
}
